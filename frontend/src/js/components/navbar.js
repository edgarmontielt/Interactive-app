'use strict'

class Navbar {
    constructor() {
        this.header = document.querySelector('header')
        this.header.classList = "max-w-screen-lg md:max-w-screen-xl mx-auto my-16 text-white flex items-center"
    }

    onClick(callback) {
        const btnAdd = document.getElementById('button-add')
        const btnClose = document.getElementById('close-modal')
        btnAdd.onclick = () => callback()
        btnClose.onclick = () => callback()
    }

    onDrop(callback) {
        const btnRemove = document.getElementById('button-remove')
        
        btnRemove.ondragover = (event) => {
            event.preventDefault();
            btnRemove.style.opacity = .9
        }

        btnRemove.ondragleave = (event) => {
            btnRemove.style.opacity = 1
        }

        btnRemove.ondrop = (event) => {
            event.preventDefault();
            const id = event.dataTransfer.getData('id')
            btnRemove.style.opacity = 1
            callback(id)
        }
    }


    render() {
        const navbar = `
            <h1 class="text-4xl font-medium">JSTodoList</h1>
            <nav class="ml-auto">
                <ul class=" flex gap-12">
                        <li class="flex items-center justify-center gap-4">
                            <section class="flex gap-4 items-center">
                                <div class="w-4 h-4 rounded-full bg-red-600"></div>
                                Urgent
                            </section
                            <section  class="flex gap-0 items-center">
                                <div class="w-4 h-4 rounded-full bg-emerald-600"></div>
                                Normal
                            </section>
                        </li>
                        <li>
                            <button id="button-add" class=" flex bg-blue-600 rounded-full px-10 py-3 items-center hover:opacity-70 ">
                                <img src="../../public/svg/add.svg" alt="addTodo"/>
                                <span>New</span>
                            </button>
                        </li>
                        <li>
                            <button id="button-remove" class=" flex bg-red-600 rounded-full px-10 py-3 items-center hover:opacity-70 ">
                                <img src="../../public/svg/trash-ligth.svg" alt="trash"/>
                            </button>
                        </li>
                </ul>
            </nav>
        `

        this.header.innerHTML = navbar
    }
}

export default Navbar