'use strict'
import View from "./view.js";
import getData from "./utils/getData.js"

export default class Model {
     constructor() {
          this.view = new View()
          this.characters = []

          setTimeout(async () => {
               await getData('character').then(res => this.characters = res)
               console.log(this.characters.results);
          }, 600)
     }

     addElement(element) {
          console.log(element);
     }
}