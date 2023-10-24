
const routes = {
  '/': {
    title: 'Home',
    page: 'pages/home/home.html'
  },
  '/projects': {
    title: 'Projects',
    page: 'pages/projects/projects.html'
  }
}

document.addEventListener("click", (e) => {
  const target = e.target as HTMLLinkElement;

  if(!target.matches("nav a")) {
    return
  }

  e.preventDefault()
  handleRouteChange(e)
})

const targetDiv = document.getElementById("content")

function handleRouteChange(event) {
  console.log(event.target.href)
  window.history.pushState({}, "", event.target.href)
  urlLocationHandler()
}

async function urlLocationHandler() {
  const route = routes[window.location.pathname]

  // console.log(window.location.pathname)

  const html = await fetch(route.page).then((res) => res.text())
  targetDiv.innerHTML = html
}

urlLocationHandler()

window.onpopstate = urlLocationHandler