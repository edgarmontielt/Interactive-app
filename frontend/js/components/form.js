export default class FormRender {
    constructor() {
        this.formCont = document.getElementById('form_container')
    }

    activeOrDisactiveForm() {
        this.formCont.classList.toggle('toggle')
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
        <form id="new_todo" class=" flex flex-col gap-7">
            <h1 class="text-4xl font-medium text-white mb-10">Nueva Tarea</h1>
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
        this.formCont.innerHTML = form
    }
}
