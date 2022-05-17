'use strict'

import Controller from "./controller.js"
import Model from "./model.js"
import View from "./view.js"

document.addEventListener('DOMContentLoaded', () => {
     const ctrl = new Controller()
     const view = new View()
     const model = new Model()
     ctrl.setView(view)
     ctrl.setModel(model)
     ctrl.render()
})