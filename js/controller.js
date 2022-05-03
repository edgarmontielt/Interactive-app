'use strict'

import Model from "./model.js"

export default class Controller {
     constructor() {
          this.model = new Model()
          this.example = document.getElementById('example')
          this.model.onClick((element) => {
               this.addElement(element)
          })
     }

     addElement(element) {
         this.model.addElement(this.example)
     }
}