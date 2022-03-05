const form = document.querySelector('#searchForm')
const movies1 = document.querySelector('#movies1')
const movies2 = document.querySelector('#movies2')
const movies3 = document.querySelector('#movies3')
const movies4 = document.querySelector('#movies4')

let contentAlreadyLoaded = false

async function generateMovies(){
    let searchString = `https://api.tvmaze.com/search/shows?q=${form.elements.query.value}`
    let res = await axios.get(searchString)
    console.log(res.data)
    let columnNumber = 0
    contentAlreadyLoaded = true
    for(let result of res.data){
        columnNumber++
        let anchor = document.createElement('a')
        let container = document.createElement('div')
        let title = document.createElement('h3')
        let image = document.createElement('img')
        if(columnNumber === 1){
            movies1.append(anchor)
            anchor.append(container)
            container.append(title)
            container.append(image)
        } else if(columnNumber === 2){
            movies2.append(anchor)
            anchor.append(container)
            container.append(title)
            container.append(image)
        } else if(columnNumber === 3){
            movies3.append(anchor)
            anchor.append(container)
            container.append(title)
            container.append(image)
        } else if(columnNumber === 4){
            movies4.append(anchor)
            anchor.append(container)
            container.append(title)
            container.append(image)
        } else {
            columnNumber = 1
            movies1.append(anchor)
            anchor.append(container)
            container.append(title)
            container.append(image)
        }
        console.log(columnNumber)
        title.innerText = result.show.name
        image.src = result.show.image.medium
        anchor.href = result.show.url
    }
} 

function deleteMovies(){
    while (movies1.firstChild == true) {
        movies1.removeChild(myNode.lastChild);
    }
}
      

form.addEventListener('submit', async (e) => {
    // if(contentAlreadyLoaded === false){
        e.preventDefault()
        console.log(form.elements.query.value)
        generateMovies()
    // } else {
    //     e.preventDefault()
    // }
    console.log('e')
})
