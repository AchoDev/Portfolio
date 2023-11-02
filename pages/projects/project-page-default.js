import { createApp, reactive } from 'https://unpkg.com/petite-vue?module'  

function Activity(props) {
  return {
    $template: '#activity-template',
    title: props.title,
    content: props.content,
    image: props.image,
  }
}

createApp({
  Activity
}).mount()

fetch('pages/projects/banner.html').then((res) => {
  document.getElementById("banner").appendChild(res.text())
})

// fetch('pages/projects') hier soll footer "check noch was anderes ab ok??"