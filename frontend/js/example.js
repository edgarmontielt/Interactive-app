import getData from "./utils/getData.js"

const root = document.getElementById('root')

function render(elements) {
    elements.forEach(item => {
        const p = document.createElement('p')
        p.innerText = item.nam
        const card = `<div class="card"><h1 class="title">${item.title}</h1></div>`
        root.innerHTML += card
    })
}

async function get() {
    const lists = await getData('lists')
    render(lists)
}

get()