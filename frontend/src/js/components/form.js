'use strict'

export default class FormRender {
    constructor() {
        this.formCont = document.getElementById('form_container')
        this.formCont.classList = `bg-[#17182af9] absolute left-[18%] top-32 w-2/3 shadow-2xl shadow-gray-900 rounded-xl toggle`
        this.formCont.id = 'form-container'
    }

    activeOrDisactiveForm() {
        const element = this.formCont
        if (element.classList.contains('toggle')) {
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

            callback({ title, description, importance })
        }
    }

    render(data) {
        // console.log(data ? data : 'hola');
        const form = `
        <div id="close-modal" class=" w-10 h-10 right-2 absolute top-5 rounded-full bg-gray-200 mb-8 flex hover:bg-gray-300 cursor-pointer">
            <img src="../../public/svg/close.svg" class="m-auto"/>
        </div>
        <form id="new_todo" class=" flex flex-wrap items-center ">
            <div class=" flex flex-col flex-wrap gap-7 w-[55%] px-5 md:px-20 py-24">
                <h1 class="text-4xl font-medium text-white ">New Task</h1>
                <div class=" w-full h-[1px] bg-red-100 mb-8"></div>
                <input 
                    type="text" 
                    name="title" 
                    class="p-2 rounded-md outline-none" 
                    placeholder="Title"
                    value=${data ? data.title : ''}
                    >
                <input 
                    type="text" 
                    name="description" 
                    class=" p-2 rounded-md outline-none" 
                    placeholder="Description" 
                    >
                <select name="importance" id="" class=" p-2 rounded-md outline-none">
                    <option value="1">Urgent</option>
                    <option value="2">Normal</option>
                </select>
                <button id="button" class=" bg-blue-600 text-white text-lg p-2 font-medium rounded-md hover:opacity-70">Listo</button>
            </div>
            <img src="https://images.pexels.com/photos/6687773/pexels-photo-6687773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class=" w-[45%] h-[550px] bg-cover bg-no-repeat ml-auto"/>
        </form>
        <div class=" w-full h-[10px] rounded-b-xl absolute left-0 bottom-0 bg-red-500 mt-8"></div>
        `
        this.formCont.innerHTML = form
    }
}
