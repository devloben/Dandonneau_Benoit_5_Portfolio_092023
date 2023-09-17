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