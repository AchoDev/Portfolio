
const routes = {
  '/': {
    title: 'Home',
    page: 'pages/home/home.html',
  },
  '/about': {
    title: 'About',
    page: 'pages/about/about.html'
  },
  '/projects': {
    title: 'Projects',
    page: 'pages/projects/projects.html'
  },
  '/contact': {
    title: 'Contact',
    page: 'pages/contact/contact.html'
  },
}

interface preloadedHTMLType {
  url: string;
  promise: Promise<Response>,
  controller: AbortController,
  result: string,
}

let preloadedHTML: preloadedHTMLType;

Array.from(document.getElementsByTagName("a")).forEach(element => {
  element.addEventListener('mouseenter', (e) => {
    console.log("loading " + element.href)
    
    if(preloadedHTML != null) preloadedHTML.controller.abort()

    const controller: AbortController = new AbortController()
    
    preloadedHTML = {
      url: element.href,
      promise: fetch(element.href, {signal: controller.signal}),
      controller: controller,
      result: "",
    }

    preloadedHTML.promise.then((res) => {
      console.log("loaded!!!")
      return res.text().then((t) => {
        console.log(t)
        preloadedHTML.result = t
      })
    })
  })
});

document.addEventListener("click", (e) => {
  const target = e.target as HTMLLinkElement;

  if(!target.matches("nav a")) {
    return
  }

  e.preventDefault()
  handleRouteChange(e)
})

const targetDiv = document.getElementById("content")
const targetScript: HTMLScriptElement = document.getElementById("page-js") as HTMLScriptElement

function handleRouteChange(event) {
  window.history.pushState({}, "", event.target.href)
  urlLocationHandler(event)
}

async function urlLocationHandler(event?) {
  const route = routes[window.location.pathname]

  let html: string;

  if(event != null && event.target.href === preloadedHTML.url) {
    html = preloadedHTML.result
  } else {
    html = await fetch(route.page).then((res) => res.text())
  }


  document.title = route.title
  targetDiv.innerHTML = ""
  targetDiv.appendChild(parseHTML(html))
}

function parseHTML(input: string): HTMLDivElement {

  const parsedHTML = document.createElement("div")

  const parser = new DOMParser()
  parsedHTML.appendChild(parser.parseFromString(input, 'text/html').documentElement)
  const scripts = parsedHTML.querySelectorAll('script')

  scripts.forEach(async (element) => {
    const newScript = document.createElement('script')
    newScript.text = await fetch(element.src).then((res) => res.text())
    newScript.type = element.type
    newScript.defer = element.defer
    
    parsedHTML.insertBefore(newScript, parsedHTML.firstChild)
    
    console.log(newScript)
  })

  return parsedHTML
}



urlLocationHandler()

window.onpopstate = urlLocationHandler