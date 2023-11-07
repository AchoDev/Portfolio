import { createApp, reactive } from 'https://unpkg.com/petite-vue?module'  


function Activity(props) {
  return {
    $template: '#activity-template',
    title: props.title,
    content: props.content,
    image: props.image,
  }
}

function Banner(props) {
  return {
    $template: '#banner-template',
    title: props.title,
    banner: `pages/projects/${props.banner}/banner.png`,
    download: props.download,
    github: props.github,
    createdOn: props.createdOn,
    publishedOn: props.publishedOn,
  }
}

function Suggestion(props) {
  return {
    $template: '#suggestion-template',
    name: props.name,
    desc: props.desc,
    imgsrc: props.path != "" ? `./pages/projects/${props.path}/main.png` : "",
    color: props.color,
    text: props.text || 'white',

    path: props.path
  }
}

const otherProjects = [
  {
    name: 'AmA',
    desc: 'Digital vocabulary book && note taking desktop application, made for language learners, who like writing down learned words and keeping them organized',
    path: 'ama',
    color: 'orange',
  },
  {
    name: 'Ultra TicTacToe', 
    desc: 'Super TicTacToe but CINEMATIC or TicTacToe where you actually need to think. Multiplayer with friends, profile pictures, multiple maps, exciting music and much more!',
    path: 'ultra-tictactoe',
    color: 'rgb(250, 68, 55)',

  },
  {
    name: 'Kang2', 
    desc: 'Extremeley rudementary, but fun programming language on top of JavaScript.Easy to understand, how it works, due to its sheer simplicity in design',
    path: 'kang2', 
    color: 'linear-gradient(0.9turn, rgb(255, 115, 0), red)', 
  },
  {
    name: 'YOURanimeList', 
    desc: 'A program that makes it uncomplicated to list your favorite Animes and share them with other users. Not bloated with all kinds of pages and whatnot. Just YOURanimeList and the others',
    path: 'youranimelist',

    color: 'rgba(91,152,213,255)',
  },
  {
    name: 'Lumina Engine', 
    desc: 'PyGame game-engine, specifically designed, to make game creation very similar to the Unity-Engine, with its component-driven architecture. Graphics, sound design, animations and realistic physics with Box2D!',
    path: 'lumina',
    color: 'rgb(152, 68, 212)',
  },
  {
    name: 'AM-Launcher', 
    desc: 'Launcher for all kinds of different apps. Add them and organize them on your own volition, to always have a place where you will find your apps.',
    path: 'am-launcher',
    color: 'linear-gradient(120deg, #7995b8, #3d74eb)',
  },
  {
    name: 'Yo-Masta-Nag', 
    desc: 'Fun and unbalanced card-game. Play locally against a friend or an AI. With an original ruleset, an... interesting story and original cards! Powered by Lumina Engine',
    path: 'yo-masta-nag',
    color: 'rgb(54, 199, 56)',
  },
  {
    name: 'Banana World', 
    desc: 'A Game about you (a banana) being kidnapped from a dangerous monkey (General Monke). Jump and evade your way through all these dangerous levels, to combine the key to get back to your family and defeat General Monke!',
    path: 'banana-world',
    color: 'rgb(255, 226, 61)',
    text: 'black',
  },
]

let imagePreview = reactive(false)

async function loadElements() {

  document.getElementById('preview-images').onclick = (e) => {

    imagePreview = true;

    document.getElementById('preview-image').innerHTML = ''
    document.getElementById('preview-image').appendChild(e.target.cloneNode())
  }

  await fetch('pages/projects/suggestion.html')
    .then((res) => res.text())
    .then((html) => {
  
      const footer = document.getElementsByTagName("footer").item(0)
  
      footer.innerHTML = html

      

      for(let i = 0; i < 2; i++) {

        const wrapper = footer.appendChild(document.createElement("div"))
        const proj = otherProjects[ Math.floor(Math.random() * otherProjects.length)]

        wrapper.innerHTML = `
          <div v-scope="Suggestion({
            name: '${proj.name}', 
            desc: '${proj.desc}',
            path: '${proj.path}',
            color: '${proj.color}',
            text: '${proj.text ? proj.text : ''}'
          })"></div>`
      }
    })

  await fetch('pages/projects/banner.html')
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("banner").innerHTML = html
    })
  
  await fetch('pages/projects/activity.html')
    .then((res) => res.text())
    .then((html) => {
      document.getElementById('activity').innerHTML = html
      
      createApp({
        Activity,
        Banner,
        Suggestion,
        imagePreview,
      }).mount()
    })

}

loadElements()


// fetch('pages/projects') hier soll footer "check noch was anderes ab ok??"