'use strict'
import Model from "../model.js";
import View from "../view.js";

export default class AddElement {
     constructor() {
          this.btn = document.getElementById('button')
          this.model = new Model()
          this.render()
     }

     onClick(callback) {
          this.btn.onclick = () => {
               const newDiv = document.createElement('p')
               newDiv.innerText = `Hola`
               this.view.hello.appendChild(newDiv)
               callback(newDiv)
          }
     }

     render() {
          const card = this.model.characters.map(item => {
               const newDiv = document.createElement('p')
               const card = `<div>${item.results.name}</div>`
               newDiv.innerHTML = card
          })

          console.log(this.model.characters);

          return card
     }
}