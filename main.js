let request = fetch('https://raw.githubusercontent.com/anamariasosam/bootcamp_globant/master/projects.json')

let projectsData = request
  .then(res => {
    return res.json()
  })
  .catch(err => {
    console.log('ups', err)
  })

projectsData.then(projects => {
  const section = document.querySelector('section')
	

  projects.forEach(project => {
    const article = createProject(project)

    section.append(article)
  })
})

createProject = project => {
	const { name, repoUrl, demoUrl, imgUrl } = project
	
  const article = document.createElement('article')
  const figure = document.createElement('figure')
  const figcaption = document.createElement('figcaption')
  const projectName = document.createElement('p')
  const projectRepoLink = document.createElement('a')
  const projectDemoLink = document.createElement('a')
  const projectImage = document.createElement('img')

  projectName.innerHTML = name
  projectRepoLink.innerHTML = 'Ver Repo'
  projectDemoLink.innerHTML = 'Ver Demo'
  projectRepoLink.href = repoUrl
	projectDemoLink.href = demoUrl
	projectRepoLink.target = '_blank'
  projectDemoLink.target = '_blank'
  projectImage.src = imgUrl

  figcaption.append(projectName)
  figcaption.append(projectRepoLink)
  figcaption.append(projectDemoLink)
  figure.append(projectImage)
  figure.append(figcaption)

  article.append(figure)

  return article
}
