function copyToClipboardAsync(str) {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(str);
    return Promise.reject('The Clipboard API is not available.');
  };

  function copy(id, link ){
    const copyable = document.querySelector(`#${id}`)
    copyToClipboardAsync(link)
    copyable.style.color = 'lightgreen'
    setTimeout(() => {
        copyable.style.color = 'black'
    }, 1500)
}

// Copy This Block For Copyable Text
const bulmaAxios = document.querySelector('#bulmaAxios')
bulmaAxios.addEventListener('click', () => {
    copy('bulmaAxios', `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>`)
})

// Tabs Functionality
const allTab = document.querySelector('#all')
const copyTab = document.querySelector('#copy')
const projectTab = document.querySelector('#project')

const allCopys = document.querySelectorAll('.copy')
const allProjects = document.querySelectorAll('.project')

allTab.addEventListener('click', () => {
    allTab.classList.add('is-active')
    copyTab.classList.remove('is-active')
    projectTab.classList.remove('is-active')
    for(let copy of allCopys){
        copy.style.display = "block"
    }
    for(let project of allProjects){
        project.style.display = "block"
    }
})

copyTab.addEventListener('click', () => {
    allTab.classList.remove('is-active')
    copyTab.classList.add('is-active')
    projectTab.classList.remove('is-active')
    for(let copy of allCopys){
        copy.style.display = "block"
    }
    for(let project of allProjects){
        project.style.display = "none"
    }
})

projectTab.addEventListener('click', () => {
    allTab.classList.remove('is-active')
    copyTab.classList.remove('is-active')
    projectTab.classList.add('is-active')
    for(let copy of allCopys) {
        copy.style.display = "none"
    }
    for(let project of allProjects) {
        project.style.display = "block"
    }
})
