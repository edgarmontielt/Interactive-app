'use strict'

import Controller from "./controller.js"
import Model from "./model.js"
import View from "./view.js"

document.addEventListener('DOMContentLoaded', () => {
    const view = new View()
    const model = new Model()
    const ctrl = new Controller(view, model)
    ctrl.renderTable()
    ctrl.getAndRenderData()
})
