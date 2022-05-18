'use strict'

import FormRender from "./components/form.js"
import Table from "./components/table.js"

export default class View {
     constructor() {
          this.btn = document.getElementById('button')
          this.root = document.getElementById('root')
          this.createForm = new FormRender()
          this.createForm.render()
          this.table = new Table()
     }

     renderTable() {
          this.table.render(this.root)
     }

     viewForm() {
          this.createForm.activeOrDisactiveForm()    
     }
}