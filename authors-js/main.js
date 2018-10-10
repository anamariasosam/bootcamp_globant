let request = fetch("https://randomuser.me/api/?results=10")

let authorsData = request
	.then((res) => { 
		return res.json()
	}).catch((err) => {
		console.log("ups", err)
	})

authorsData.then((data) => {
	const section = document.querySelector("section")
	const authors = data.results;

	authors.forEach(author => {
		const name = author.name.first + " " + author.name.last
		const image = author.picture.large
		const email = author.email

		const article = createArticle(name, image, email)

		article.addEventListener("click", () => {
			removeFromList(email)
			addToFavorites(name, image, email)
		})

		section.append(article)
	})
})

createArticle = (name, image, email) => {
	const article = document.createElement("article")
	const figure = document.createElement("figure")
	const figcaption = document.createElement("figcaption")
	const img = document.createElement("img")

	figcaption.innerHTML = name
	img.src = image

	figure.append(img)
	figure.append(figcaption)

	article.setAttribute("id", email)
	article.append(figure)

	return article
}

addToList = (name, image, email) => {
	const section = document.querySelector('section')
	const article = createArticle(name, image, email)

	article.addEventListener("click", () => {
		removeFromList(email)
		addToFavorites(name, image, email)
	})

	section.append(article)
}

addToFavorites = (name, image, email) => {
	const aside = document.querySelector("aside")

	const article = createArticle(name, image, email)

	article.addEventListener("click", () => {
		removeFromList(email)
		addToList(name, image, email)
	})
	
	aside.append(article)
}

removeFromList = (email) => {
	var node = document.getElementById(email);
	node.remove()
}