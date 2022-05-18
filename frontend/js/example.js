import FormRender from "./components/form.js"
import { getData, newList } from "./utils/index.js"

const root = document.getElementById('root')
const btn = document.getElementById('button')
const formCont = document.getElementById('form_container')

const formRend = new FormRender()

const data = await getData('lists')
render(data)

function render(elements) {
    root.innerHTML = ''
    elements.forEach(item => {
        const p = document.createElement('p')
        p.innerText = item.name
        const card = `
            <div class="card ${item.importance === 1 ? ' bg-red-900' : 'bg-green-900'}" draggable="true">
                <h1 class="title mb-10">${item.title}</h1>
                <p class=" text-white title"> ${item.description}</p>
            </div>
        `
        root.innerHTML += card
    })
    // formCont.innerHTML = formStr
    formRend.render()
}

const form = document.getElementById('new_card')

function activeOrDisactiveForm() {
    formCont.classList.toggle('toggle')
}

btn.onclick = activeOrDisactiveForm

form.onsubmit = async (event) => {
    event.preventDefault();
    const {
        title: { value: title },
        description: { value: description },
        importance: { value: importance }
    } = event.target

    const result = await newList('lists/create', { title, description, importance })
    activeOrDisactiveForm()
    render(reloadData(result))
}

function reloadData(item) {
    const newData = [...data, item]
    return newData
}