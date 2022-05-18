'use strict'

import FormRender from "./components/form.js"
import Table from "./components/table.js"
import Row from "./components/row.js"

export default class View {
     constructor() {
          this.btn = document.getElementById('button')
          this.root = document.getElementById('root')
          this.createForm = new FormRender()
          this.createForm.render()
          this.table = new Table()
          this.row = new Row()
     }

     renderTable() {
          this.table.render(this.root)
     }

     viewForm() {
          this.createForm.activeOrDisactiveForm()
     }

     renderRows(data) {
          const tbody = document.getElementById('tbody')
          this.row.render(tbody, data)
     }
}