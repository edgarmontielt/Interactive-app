'use strict'

import { getData, newList } from "./utils/getData.js"

export default class Model {
     constructor() {
          this.formNewCard = document.getElementById('new_card')
          console.log(formNewCard);
     }

     async createCard(list, callback) {
          const res = await newList('list/create', list)
     }

     async getData() {
          const lists = await getData('lists')
          return lists
     }
}