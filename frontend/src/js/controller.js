'use strict'

import Row from "./components/row.js"

export default class Controller {
     constructor(view, model) {
          this.model = model
          this.view = view
          this.row = new Row()
          this.view.createForm.onSubmit((todo) => this.newTodo(todo))
          this.view.nav.onClick(() => { this.viewForm() })
          this.view.nav.onDrop((id) => { this.deleteTodo(id)})
          this.todos = []
     }

     renderTable() {
          this.view.renderTable()
     }

     viewForm() {
          this.view.viewForm()
     }

     async getAndRenderData() {
          const cards = await this.model.getData()
          this.todos = cards
          this.view.renderRows(cards)
          this.row.onClick((id) => this.deleteTodo(id))
          this.row.onDrag()
     }

     async newTodo(todo) {
          await this.model.newTodo(todo)
          this.viewForm()
          this.reloadData()
     }

     deleteTodo(id) {
          this.model.deleteTodo(id)
          this.filterData(id)
     }

     reloadData() {
          this.getAndRenderData()
     }

     filterData(id) {
          const newTodos = this.todos.filter(todo => todo._id != id)
          this.view.renderRows(newTodos)
     }
}