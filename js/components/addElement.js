'use strict'
import Model from "../model.js";
import View from "../view.js";

export default class AddElement {
     constructor() {
          this.view = new View()
          this.model = new Model()
          this.render()
     }

     onClick(callback) {
          this.view.btn.onclick = () => {
               console.log(this.model.characters.results);
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