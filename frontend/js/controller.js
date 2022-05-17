'use strict'

import AddElement from "./components/addElement.js"
import Model from "./model.js"

export default class Controller {
     constructor() {
          this.model = null
          this.view = null
     }

     setView(view) {
          this.view = view
     }

     setModel(model) {
          this.model = model
     }

     render() {
          console.log(this.view);
          console.log(this.model.characters);
          this.view.btn.onclick = () => {
               alert('hola')
          }
     }
}