'use strict'
import View from "./view.js";
import getData from "./utils/getData.js"

export default class Model {
     constructor() {
          this.characters = []
          this.getData()
     }

     async getData() {
          const characters = await getData('character')
          this.characters = characters
     }
}