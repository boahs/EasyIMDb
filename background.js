chrome.contextMenus.create({
    'title': 'Search IMDB for "%s"',
    'contexts': ['selection'],
    'onclick': async (context) => {
        const name = context.selectionText;
        const response = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=df25630e`)
        const {
            Title,
            Year,
            Runtime,
            Actors,
            Genre,
            imdbRating
        } = await response.json()
        const newLine = "\r\n"
        let message = `Title: ${Title}`
        message += newLine
        message += `Year : ${Year}`
		message += newLine
		message += `Runtime : ${Runtime}`
		message += newLine
		message += `Genre : ${Genre}`
		message += newLine
		message += `Actors : ${Actors}`
		message += newLine
		message += `IMDb Rating : ${imdbRating}`
		alert(message)
    }
});