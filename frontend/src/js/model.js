'use strict'

import { getData, createTodo, deleteTodo, updateStatus } from "./utils/index.js"

export default class Model {

     async getData() {
          const lists = await getData('lists')
          return lists
     }

     async newTodo(todo) {
          const result = await createTodo('lists/create', todo)
          return result
     }

     async deleteTodo(id) {
          await deleteTodo(`lists/delete/${id}`)
     }

     async updateStatus(id) {
          await updateStatus('lists/updateStatus', id)
     }
}