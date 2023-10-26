
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

  '/ultra-tictactoe': {
    title: 'Ultra TicTacToe',
    page: 'pages/projects/ultra-tictactoe/en.html'
  },
  '/kang2': {
    title: 'Ultra TicTacToe',
    page: 'pages/projects/kang2/en.html'
  },
  '/ama': {
    title: 'AmA',
    page: 'pages/projects/ama/en.html'
  },

  '/contact': {
    title: 'Contact',
    page: 'pages/contact/contact.html'
  },
}

document.documentElement.dataset.scroll = window.scrollY.toString();
document.addEventListener('scroll', (e) => {
  document.documentElement.dataset.scroll = window.scrollY.toString();
}, { passive: true });


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

    if(preloadedHTML != null) {
      if(preloadedHTML.url === element.href) return

      preloadedHTML.controller.abort()
    } 

    const controller: AbortController = new AbortController()
    
    const route = routes['/' + element.href.split("/")[3]]

    // console.log(element.href.split("/"))

    preloadedHTML = {
      url: element.href,
      promise: fetch(route.page, {signal: controller.signal}),
      controller: controller,
      result: "",
    }

    preloadedHTML.promise.then((res) => {
      console.log("loaded!!!")
      return res.text().then((t) => {
        // console.log(t)
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

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function urlLocationHandler(event?) {
  const route = routes[window.location.pathname]

  let html: string;
  document.title = route.title
  targetDiv.innerHTML = ""

  if(event != null && event.target.href === preloadedHTML.url) {
    // html = preloadedHTML.result

    if(preloadedHTML.result === "") {
      await (await preloadedHTML.promise).text
      console.log("aaa")
      await timeout(5)
      console.log("bbb")
      console.log("promise fone")
    }

    console.log(preloadedHTML.result)

    targetDiv.appendChild(
      parseHTML(preloadedHTML.result)
    )
  } else {
    console.log("not the same man")
    html = await fetch(route.page).then((res) => res.text())
    targetDiv.appendChild(parseHTML(html))
  }


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