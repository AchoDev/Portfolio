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
    download: props.download,
    github: props.github,
    createdOn: props.createdOn,
    publishedOn: props.publishedOn,
  }
}

await fetch('pages/projects/banner.html')
  .then((res) => res.text())
  .then((html) => {
  document.getElementById("banner").innerHTML = html

fetch('pages/projects/activity.html')
.then((res) => res.text())
.then((html) => {
  document.getElementById('activity').innerHTML = html
  
  createApp({
    Activity,
    Banner,
  }).mount()
})


})

// fetch('pages/projects') hier soll footer "check noch was anderes ab ok??"