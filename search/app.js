const form = document.querySelector('#searchForm')
const overallContainer = document.querySelector('#overallContainer')
let contentAlreadyLoaded = false

async function generateMovies(){
    contentAlreadyLoaded = true
    let searchString = `https://api.tvmaze.com/search/shows?q=${form.elements.query.value}`
    let res = await axios.get(searchString)
    console.log(res.data)
    for(let result of res.data){
        let anchor = document.createElement('a')
        let container = document.createElement('div')
        let title = document.createElement('h3')
        let image = document.createElement('img')
        title.classList.add('title')
        overallContainer.append(anchor)
        anchor.append(container)
        container.append(title)
        container.append(image)

        title.innerText = result.show.name
        image.src = result.show.image.medium
        anchor.href = result.show.url
    }
} 

async function generatePeople(){
    contentAlreadyLoaded = true
    let searchString = `https://api.tvmaze.com/search/people?q=${form.elements.query.value}`
    let res = await axios.get(searchString)
    console.log(res.data)
    for(let result of res.data){
        let anchor = document.createElement('a')
        let container = document.createElement('div')
        let name = document.createElement('h3')
        let image = document.createElement('img')
        name.classList.add('title')
        overallContainer.append(anchor)
        anchor.append(container)
        container.append(name)
        container.append(image)
        name.innerText = result.person.name
        if(result.person.image == null) {
            image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68D1zB62HiAWZAkQpessCgGpmfvJQUX8Rhg&usqp=CAU'
        }
        else {
             image.src = result.person.image.medium
        }
        anchor.href = result.person.url
    }
}

function clear(){
    while (overallContainer.firstChild) {
    overallContainer.removeChild(overallContainer.lastChild);
    }
}
      

form.addEventListener('submit', async (e) => {
    if(contentAlreadyLoaded === false){
        e.preventDefault()
        console.log(contentAlreadyLoaded)
        if(form.elements.searchType.value == 'shows') { generateMovies() }
        else if(form.elements.searchType.value == 'people') { generatePeople() }
    } else {
        e.preventDefault()
        console.log(contentAlreadyLoaded)
        if(form.elements.searchType.value == 'shows') { clear(); generateMovies() }
        else if(form.elements.searchType.value == 'people') { clear(); generatePeople() }
    }
})
