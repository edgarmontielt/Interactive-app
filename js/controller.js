'use strict'

import AddElement from "./components/addElement.js"
import Model from "./model.js"

export default class Controller {
     constructor() {
          this.model = new Model()
          this.example = document.getElementById('example')
          this.newElement = new AddElement()

          this.newElement.onClick((element) => {
               this.addElement(element)
          })
     }

     addElement(element) {
         this.model.addElement(element)
     }
}