'use strict'

import { getData, post, deleteTodo, updateStatus, updateTodo } from "./utils/index.js"

export default class Model {

     logIn(data) {
          const result = post('auth/login', data)
          return result
     }

     async getData() {
          const lists = await getData('lists')
          return lists
     }

     async newTodo(todo) {
          const result = await post('lists/create', todo)
          return result
     }

     deleteTodo(id) {
          deleteTodo(`lists/delete/${id}`)
     }

     async updateTodo(id, data) {
          const result = await updateTodo(id, data)
          return result
     }

     async updateStatus(id) {
          await updateStatus('lists/updateStatus', id)
     }
}