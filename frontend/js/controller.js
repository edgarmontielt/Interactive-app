'use strict'

import AddElement from "./components/addElement.js"

export default class Controller {
     constructor(view, model) {
          this.model = model
          this.view = view
          this.view.btn.onclick = () => {
               this.addList()
          }
     }

     addList(list) {
          this.view.formRender()
     }

     async render() {
          const cards = await this.model.getData()
          cards.forEach(item => {
               const p = document.createElement('p')
               p.innerText = item.name
               const card = `<div class="card"><h1 class="title">${item.title}</h1></div>`
               root.innerHTML += card
          })
     }
}