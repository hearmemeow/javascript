function copyToClipboardAsync(str) {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(str);
    return Promise.reject('The Clipboard API is not available.');
  };

const copyable = document.querySelector('#copyable')

copyable.addEventListener('click', () => {
    copyToClipboardAsync(`<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"></link>`)
    copyable.style.color = 'green'
    copyable.innerHTML = `<i class="fa-solid fa-copy"></i>
    <span class="name" id="Bulma">Click To Copy Bulma and Axios Link</span>✓`
    setTimeout(() => {
        copyable.style.color = 'black'
        copyable.innerHTML = `<i class="fa-solid fa-copy"></i>
        <span class="name" id="Bulma">Click To Copy Bulma and Axios Link</span>`
    }, 1500)
})
const allAnchors = document.querySelectorAll('.folder')
const search = document.querySelector('#search')

search.addEventListener('change', () => {
    refreshSearch()
})

function refreshSearch() {
    for(let a of allAnchors) {
        let aText = a.innerText
        let searchValue = search.value
        if(aText.indexOf(searchValue) !== -1 && searchValue !== ''){
            a.style.backgroundColor = 'yellow'
        }
        if(aText.indexOf(searchValue) == -1 || searchValue == '') {
            a.style.backgroundColor = 'white'
        }
    }
}

const allCopys = document.querySelectorAll('.copy')
const allProjects = document.querySelectorAll('.project')
const allPanelBlocks = document.querySelectorAll('.panel-block')

const allTab = document.querySelector('#all')
const copyTab = document.querySelector('#copy')
const projectTab = document.querySelector('#project')

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
