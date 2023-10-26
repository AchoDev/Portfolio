var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
};
document.documentElement.dataset.scroll = window.scrollY.toString();
document.addEventListener('scroll', (e) => {
    document.documentElement.dataset.scroll = window.scrollY.toString();
}, { passive: true });
let preloadedHTML;
Array.from(document.getElementsByTagName("a")).forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        console.log("loading " + element.href);
        if (preloadedHTML != null) {
            if (preloadedHTML.url === element.href)
                return;
            preloadedHTML.controller.abort();
        }
        const controller = new AbortController();
        const route = routes['/' + element.href.split("/")[3]];
        // console.log(element.href.split("/"))
        preloadedHTML = {
            url: element.href,
            promise: fetch(route.page, { signal: controller.signal }),
            controller: controller,
            result: "",
        };
        preloadedHTML.promise.then((res) => {
            console.log("loaded!!!");
            return res.text().then((t) => {
                // console.log(t)
                preloadedHTML.result = t;
            });
        });
    });
});
document.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    handleRouteChange(e);
});
const targetDiv = document.getElementById("content");
const targetScript = document.getElementById("page-js");
function handleRouteChange(event) {
    window.history.pushState({}, "", event.target.href);
    urlLocationHandler(event);
}
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function urlLocationHandler(event) {
    return __awaiter(this, void 0, void 0, function* () {
        const route = routes[window.location.pathname];
        let html;
        document.title = route.title;
        targetDiv.innerHTML = "";
        if (event != null && event.target.href === preloadedHTML.url) {
            // html = preloadedHTML.result
            if (preloadedHTML.result === "") {
                yield (yield preloadedHTML.promise).text;
                console.log("aaa");
                yield timeout(5);
                console.log("bbb");
                console.log("promise fone");
            }
            console.log(preloadedHTML.result);
            targetDiv.appendChild(parseHTML(preloadedHTML.result));
        }
        else {
            console.log("not the same man");
            html = yield fetch(route.page).then((res) => res.text());
            targetDiv.appendChild(parseHTML(html));
        }
    });
}
function parseHTML(input) {
    const parsedHTML = document.createElement("div");
    const parser = new DOMParser();
    parsedHTML.appendChild(parser.parseFromString(input, 'text/html').documentElement);
    const scripts = parsedHTML.querySelectorAll('script');
    scripts.forEach((element) => __awaiter(this, void 0, void 0, function* () {
        const newScript = document.createElement('script');
        newScript.text = yield fetch(element.src).then((res) => res.text());
        newScript.type = element.type;
        newScript.defer = element.defer;
        parsedHTML.insertBefore(newScript, parsedHTML.firstChild);
        console.log(newScript);
    }));
    return parsedHTML;
}
urlLocationHandler();
window.onpopstate = urlLocationHandler;
