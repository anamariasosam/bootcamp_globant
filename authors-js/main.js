let request = fetch("https://randomuser.me/api/?results=10")

let authorsData = request
	.then((res) => { 
		return res.json()
	}).catch((err) => {
		console.log('ups', err)
	})

authorsData.then((data) => {
	const section = document.querySelector('section')
	const authors = data.results;

	authors.forEach(author => {
		const article = document.createElement('article')
		const figure = document.createElement('figure')
		const figcaption = document.createElement('figcaption')
		const img = document.createElement('img')

		figcaption.innerHTML = author.name.first + ' ' + author.name.last
		img.src = author.picture.large

		figure.append(img)
		figure.append(figcaption)

		article.setAttribute("id", author.name.first);
		article.append(figure)

		section.append(article)

		article.addEventListener('click', (e) => {
			console.log(e)
		})
	})
})