const form = document.querySelector('#searchForm')
const movies = document.querySelector('#movies')
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    console.log(form.elements.query.value)
    let searchString = `https://api.tvmaze.com/search/shows?q=${form.elements.query.value}`
    let res = await axios.get(searchString)
    console.log(res.data)
    for(let result of res.data){
        let container = document.createElement('div')
        let title = document.createElement('h3')
        let image = document.createElement('img')
        movies.append(container)
        container.append(title)
        container.append(image)
        title.innerText = result.show.name
        try {
        let imageString = result.show.image.medium
        image.src = imageString
        console.log(image.src)
        } catch(e) {
            console.log(e)
        }
    }
})


