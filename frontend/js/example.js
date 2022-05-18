import { getData, newList } from "./utils/getData.js"

const root = document.getElementById('root')
const btn = document.getElementById('button')
const formCont = document.getElementById('form_container')

const data = await getData('lists')
const formStr = `
        <form id="new_card" class=" flex flex-col w-1/3 gap-7 toggle">
             <input type="text" name="title" class="p-2 rounded-md">
             <input type="text" name="description" class=" p-2 rounded-md">
             <select name="importance" id="" class=" p-2 rounded-md">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
             </select>
             <button class=" bg-blue-600 text-white p-2 rounded-md hover:">Enviar</button>
        </form>
`
render(data)

function render(elements) {
    elements.forEach(item => {
        const p = document.createElement('p')
        p.innerText = item.name
        const card = `<div class="card"><h1 class="title">${item.title}</h1></div>`
        root.innerHTML += card
    })
    formCont.innerHTML = formStr
}

const form = document.getElementById('new_card')

function viewForm() {
    form.classList.toggle('toggle')
}

btn.onclick = viewForm

form.onsubmit = async (event) => {
    event.preventDefault();
    const {
        title: { value: title },
        description: { value: description },
        importance: { value: importance }
    } = event.target

    const result = await newList('lists/create', { title, description, importance })
    render(filterData(result))
}

function filterData(item) {
    const newData = data.push(item)
    console.log(newData);
    return newData
}