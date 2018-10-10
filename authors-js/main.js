let request = fetch('https://randomuser.me/api/?results=10')

let authorsData = request
  .then(res => {
    return res.json()
  })
  .catch(err => {
    console.log('ups', err)
  })

authorsData.then(data => {
  const section = document.querySelector('section')
  const authors = data.results

  authors.forEach(author => {
    console.log(author)
    const name = `${author.name.first} ${author.name.last}`
    const image = author.picture.large
    const email = author.email
    const location = `${author.location.city}, ${author.location.state}`
    const authorData = { name, image, email, location }

    const article = createArticle(authorData)

    article.addEventListener('click', () => {
      removeAuthorFromList(email)
      addAuthorToFavorites(authorData)
    })

    section.append(article)
  })
})

createArticle = author => {
  const { name, image, email, location } = author
  const article = document.createElement('article')
  const figure = document.createElement('figure')
  const authorName = document.createElement('p')
  const authorLocation = document.createElement('p')
  const figcaption = document.createElement('figcaption')
  const authorImg = document.createElement('img')

  authorName.innerHTML = name
  authorLocation.innerHTML = location
  authorImg.src = image

  figcaption.append(authorName)
  figcaption.append(authorLocation)
  figure.append(authorImg)
  figure.append(figcaption)

  article.setAttribute('id', email)
  article.append(figure)

  return article
}

addToOriginalList = author => {
  const { name, image, email, location } = author

  const section = document.querySelector('section')
  const article = createArticle(author)

  article.addEventListener('click', () => {
    removeAuthorFromList(email)
    addAuthorToFavorites(author)
  })

  section.append(article)
}

addAuthorToFavorites = author => {
  const { name, image, email, location } = author

  const aside = document.querySelector('aside')

  const article = createArticle(author)

  article.addEventListener('click', () => {
    removeAuthorFromList(email)
    addToOriginalList(author)
  })

  aside.append(article)
}

removeAuthorFromList = email => {
  var article = document.getElementById(email)
  article.remove()
}
