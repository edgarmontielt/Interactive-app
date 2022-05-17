import getData from "./utils/getData.js"

const root = document.getElementById('root')

const render = (elements) => {
    elements.forEach(item => {
        console.log(item);
        const p = document.createElement('p')
        p.innerText = item.nam
        const card = `<div class="card">${item.name}</div>`
        root.innerHTML += card
    })
}

const get = async () => {
    const characters = await getData('character')
    render(characters.results)
}

get()