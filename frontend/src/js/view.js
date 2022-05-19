'use strict'

import FormRender from "./components/form.js"
import Table from "./components/table.js"
import Row from "./components/row.js"
import Navbar from "./components/navbar.js"

export default class View {
     constructor() {
          this.root = document.getElementById('root')
          this.nav = new Navbar()
          this.nav.render()
          this.createForm = new FormRender()
          this.renderForm()
          this.table = new Table()
          this.row = new Row()
     }

     renderTable() {
          this.table.render(this.root)
     }

     renderForm() {
          this.createForm.render()
     }

     viewForm() {
          this.createForm.activeOrDisactiveForm()
     }

     renderRows(data) {
          const tbody = document.getElementById('tbody')
          this.row.render(tbody, data)
     }

     renderNavbar() {
          this.nav.render(this.header)
     }

     opacity() {
          this.nav.onDrop()
     }
}