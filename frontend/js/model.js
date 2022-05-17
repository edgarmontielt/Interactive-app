'use strict'

import { getData, newList } from "./utils/getData.js"

export default class Model {
     constructor() {
     }

     async createCard(list, callback) {
          
     }

     async getData() {
          const lists = await getData('lists')
          return lists
     }
}