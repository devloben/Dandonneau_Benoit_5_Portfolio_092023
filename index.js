async function getData() {
try {
   const reponse = await fetch('dataProjects.json')
   const projects = await reponse.json()
   
   const projectsWrapper = document.querySelector('.projects__wrapper')
   
   for (let i = 0; i < projects.length; i++) {
       const project = projects[i] 
       const projectElem = document.createElement("div")
       projectElem.classList.add("project")
       
       if (i % 2 === 0) {
           projectElem.classList.add('pair')
       } else {
           projectElem.classList.add('impair')
       }

       const projectInfosElem = document.createElement("div")
       projectInfosElem.classList.add("project__infos")
       
       const titleElem = document.createElement("h3")
       const linkTitleElem = document.createElement("a")
       linkTitleElem.href = project.url
       linkTitleElem.textContent = project.title
       linkTitleElem.target = "_blank"
       const descriptionElem = document.createElement("p")
       descriptionElem.textContent = project.description
       const imageElem = document.createElement("img")
       imageElem.src = project.picture
       imageElem.alt = `${project.title} - ${project.description}`
       imageElem.loading = "lazy"
       
       projectsWrapper.appendChild(projectElem)
       projectElem.appendChild(imageElem)
       projectElem.appendChild(projectInfosElem)
       projectInfosElem.appendChild(titleElem)
       projectInfosElem.appendChild(descriptionElem)
       titleElem.appendChild(linkTitleElem)
   }
   } catch (error) {
       console.error('Une erreur est survenue dans la récupération des données.')
   }
}
getData()

// Barre de progression
window.onload = () => {
    window.addEventListener("scroll", () => {
       let hauteur = document.documentElement.scrollHeight - window.innerHeight
       let position = window.scrollY
       let largeur = document.documentElement.clientWidth
       let scrollBar = (position / hauteur) * largeur
       document.getElementById("scroll-bar").style.width = scrollBar + "px"
    })
 }