let request = fetch('https://randomuser.me/api/?results=10')

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
		const name = `${author.name.first} ${author.name.last}`
		const image = author.picture.large
		const email = author.email
		const authorData = { name, image, email }

		const article = createArticle(authorData)

		article.addEventListener('click', () => {
			removeAuthorFromList(email)
			addAuthorToFavorites(authorData)
		})

		section.append(article)
	})
})

createArticle = (author) => {
	const { name, image, email } = author
	const article = document.createElement('article')
	const figure = document.createElement('figure')
	const figcaption = document.createElement('figcaption')
	const img = document.createElement('img')

	figcaption.innerHTML = name
	img.src = image

	figure.append(img)
	figure.append(figcaption)

	article.setAttribute('id', email)
	article.append(figure)

	return article
}

addToOriginalList = (author) => {
	const { name, image, email } = author

	const section = document.querySelector('section')
	const article = createArticle(author)

	article.addEventListener('click', () => {
		removeAuthorFromList(email)
		addAuthorToFavorites(author)
	})

	section.append(article)
}

addAuthorToFavorites = (author) => {
	const { name, image, email } = author

	const aside = document.querySelector('aside')

	const article = createArticle(author)

	article.addEventListener('click', () => {
		removeAuthorFromList(email)
		addToOriginalList(author)
	})
	
	aside.append(article)
}

removeAuthorFromList = (email) => {
	var node = document.getElementById(email);
	node.remove()
}