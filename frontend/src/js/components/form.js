'use strict'

export default class FormRender {
    constructor() {
        this.formCont = document.getElementById('form_container')
        this.formCont.classList = `bg-[#17182af9] absolute left-[18%] top-32 w-2/3 px-20 py-24 shadow-2xl shadow-gray-900 rounded-xl toggle`
        this.formCont.id = 'form-container'
    }

    activeOrDisactiveForm() {
        const element = this.formCont
        if(element.classList.contains('toggle')) {
            element.style.position = 'absolute'
            element.style.display = 'block'
            element.style.animation = 'animForm .25s'
        } else {
            element.style.animation = 'close 5s infinite'
            element.style.position = 'static'
            element.style.display = 'none'
        }
        element.classList.toggle('toggle')
    }

    onSubmit(callback) {
        const form = document.getElementById('new_todo')
        form.onsubmit = (event) => {
            event.preventDefault()
            const {
                title: { value: title },
                description: { value: description },
                importance: { value: importance }
            } = event.target

            console.log(title, description, importance);

            callback({ title, description, importance })
        }
    }

    render() {
        const form = `
        <div class=" w-full h-[12px] rounded-b-xl absolute left-0 top-0 bg-red-500 mb-8"></div>
        <form id="new_todo" class=" flex flex-wrap gap-20 items-center justify-center">
            <div class=" flex flex-col gap-7 w-1/2">
                <h1 class="text-4xl font-medium text-white ">New Task</h1>
                <div class=" w-full h-[1px] bg-red-100 mb-8"></div>
                <input type="text" name="title" class="p-2 rounded-md outline-none" placeholder="Title">
                <input type="text" name="description" class=" p-2 rounded-md outline-none" placeholder="Description">
                <select name="importance" id="" class=" p-2 rounded-md outline-none">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                </select>
                <button id="button" class=" bg-blue-600 text-white text-lg p-2 font-medium rounded-md hover:opacity-70">Listo</button>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/4394/4394562.png" class=" w-1/3 h-1/3"/>
        </form>
        `
        this.formCont.innerHTML = form
    }
}
