'use strict'

import Row from "./components/row.js"

export default class Controller {
     constructor(view, model) {
          this.model = model
          this.view = view
          this.view.btn.onclick = () => {
               this.viewForm()
          }
          this.row = new Row()
          this.view.createForm.onSubmit((todo) => this.newTodo(todo))
          this.row.onClick(() => {
               
          })
     }

     renderTable() {
          this.view.renderTable()
     }

     viewForm() {
          this.view.viewForm()
     }

     async getAndRenderData() {
          const tbody = document.getElementById('tbody')
          const cards = await this.model.getData()
          this.row.render(tbody, cards)
     }

     async newTodo(todo) {
          await this.model.newTodo(todo)
          this.viewForm()
          this.reloadData()
     }

     async deleteTodo(id) {

     }

     reloadData() {
          this.getAndRenderData()
     }
}