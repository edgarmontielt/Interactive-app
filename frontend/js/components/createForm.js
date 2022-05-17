export default class FormRender {
    constructor() {
        this.formCont = document.getElementById('form_container')
    }

    render() {
        const form = `
        <form id="new_card" class=" flex flex-col w-1/3 gap-7">
             <input type="text" name="name" class=" p-2 rounded-md">
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
