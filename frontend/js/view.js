'use strict'

import FormRender from "./components/createForm.js"

export default class View {
     constructor() {
          this.btn = document.getElementById('button')
          this.root = document.getElementById('root')
          this.createFrom = new FormRender()
     }

     formRender() {
          this.createFrom.render()
     }
}