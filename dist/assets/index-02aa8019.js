import"./modulepreload-polyfill-3cfb730f.js";var h=globalThis&&globalThis.__awaiter||function(t,e,n,a){function r(o){return o instanceof n?o:new n(function(i){i(o)})}return new(n||(n=Promise))(function(o,i){function f(c){try{s(a.next(c))}catch(p){i(p)}}function w(c){try{s(a.throw(c))}catch(p){i(p)}}function s(c){c.done?o(c.value):r(c.value).then(f,w)}s((a=a.apply(t,e||[])).next())})};const d={"/":{title:"Home",page:"pages/home/home.html"},"/about":{title:"About",page:"pages/about/about.html"},"/projects":{title:"Projects",page:"pages/projects/projects.html"},"/ultra-tictactoe":{title:"Ultra TicTacToe",page:"pages/projects/ultra-tictactoe/en.html"},"/kang2":{title:"Kang2",page:"pages/projects/kang2/en.html"},"/ama":{title:"AmA",page:"pages/projects/ama/en.html"},"/yo-masta-nag":{title:"Yo-Masta-Nag",page:"pages/projects/yo-masta-nag/en.html"},"/youranimelist":{title:"YOURAnimeList",page:"pages/projects/youranimelist/en.html"},"/am-launcher":{title:"AchoMatico-Launcher",page:"pages/projects/am-launcher/en.html"},"/banana-world":{title:"Banana World",page:"pages/projects/banana-world/en.html"},"/lumina":{title:"Lumina Engine",page:"pages/projects/lumina/en.html"},"/secret":{title:"Secret",page:"pages/projects/secret/en.html"},"/contact":{title:"Contact",page:"pages/contact/contact.html"},"/error":{title:"Not Found",page:"pages/not-found.html"}};document.documentElement.dataset.scroll=window.scrollY.toString();document.addEventListener("scroll",t=>{document.documentElement.dataset.scroll=window.scrollY.toString()},{passive:!0});let l;Array.from(document.getElementsByTagName("a")).forEach(t=>{t.addEventListener("mouseenter",e=>{if(console.log("loading "+t.href),l!=null){if(l.url===t.href)return;l.controller.abort()}const n=new AbortController,a=d["/"+t.href.split("/")[3]];l={url:t.href,promise:fetch(a.page,{signal:n.signal}),controller:n,result:""},l.promise.then(r=>(console.log("loaded!!!"),r.text().then(o=>{l.result=o})))})});document.addEventListener("click",t=>{t.target.matches("nav a")&&(t.preventDefault(),y(t))});const u=document.getElementById("content");document.getElementById("page-js");function y(t){window.history.pushState({},"",t.target.href),m(t)}function j(t){return new Promise(e=>setTimeout(e,t))}function m(t){var e;return h(this,void 0,void 0,function*(){const n=(e=d[window.location.pathname])!==null&&e!==void 0?e:d["/error"];let a;document.title=n.title,u.innerHTML="",t!=null&&t.target.href===l.url?(l.result===""&&(yield(yield l.promise).text,yield j(5)),u.appendChild(g(l.result))):(console.log("not the same man"),a=yield fetch(n.page).then(r=>r.text()),console.log(a),u.appendChild(g(a)))})}function g(t){const e=document.createElement("div"),n=new DOMParser;return e.appendChild(n.parseFromString(t,"text/html").documentElement),e.querySelectorAll("script").forEach(r=>h(this,void 0,void 0,function*(){const o=document.createElement("script");o.text=yield fetch(r.src).then(i=>i.text()),o.type=r.type,o.defer=r.defer,e.insertBefore(o,e.firstChild),console.log(r)})),e}m();window.onpopstate=m;