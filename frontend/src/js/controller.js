'use strict'

import Row from "./components/row.js"

export default class Controller {
     constructor(view, model) {
          this.model = model
          this.view = view
          this.todos = []
          this.row = new Row()
          this.view.createForm.onSubmit((todo) => update ? this.newTodo(todo): this.updateTodo(todo))
          this.view.nav.onClick(() => this.viewForm())
          this.view.nav.onDrop((id) => this.deleteTodo(id))
          this.view.login.activeMenu()
          this.view.login.closeMenu()
          this.logIn()
     }

     renderTable() {
          this.view.renderTable()
     }

     viewForm() {
          this.view.viewForm()
     }

     async logIn(data) {
          const res = this.model.logIn(data)
          return res
     }

     async getData() {
          const cards = await this.model.getData()
          return cards
     }

     async getAndRenderData() {
          const todos = await this.getData()
          this.todos = todos
          this.view.renderRows(todos)
          this.row.onClick((id) => this.deleteTodo(id))
          this.row.onClickStatus((id) => this.updateStatus(id))
          this.row.onClickEdit(() => this.viewForm())
          this.row.onDrag()
     }

     filterTodo(cards, id) {
          const todo = cards.filter(item => item._id === id)
          return todo[0]
     }

     async newTodo(todo) {
          await this.model.newTodo(todo)
          this.viewForm()
          this.reloadData()
     }

     deleteTodo(id) {
          const value = confirm('¿Estas Seguro?')
          if (value) {
               this.model.deleteTodo(id)
               this.filterData(id)
          }
     }

     async updateTodo(id) {
          await this.model.updateTodo(id)
     }

     async updateStatus(id) {
          await this.model.updateStatus(id)
     }

     reloadData() {
          this.getAndRenderData()
     }

     filterData(id) {
          const newTodos = this.todos.filter(todo => todo._id != id)
          this.todos = newTodos
          this.view.renderRows(newTodos)
          this.view.nav.onClick(() => { this.viewForm() })
          this.row.onClick((id) => this.deleteTodo(id))
          this.row.onDrag()
     }
}