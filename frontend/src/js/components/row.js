'use strict'

export default class Row {
     constructor() {
          this.btn = document.getElementById('button')
     }

     onClick(callback) {
          const elements = document.querySelectorAll('.delete')
          elements.forEach(item => {
               item.onclick = (event) => {
                    callback(event.target.id)
               }
          })
     }

     onDrag() {
          const elements = document.querySelectorAll('tr')
          elements.forEach(item => {
               item.ondragstart = (event) => {
                    event.dataTransfer.setData('id', event.target.id)
                    item.style.position = 'absolute'
                    item.style.opacity = 0
               }

               item.ondragend = () => {
                    item.style.position = 'static'
                    item.style.opacity = 1
               }
          })
     }

     render(body, elements) {
          body.innerHTML = ''
          elements.forEach(item => {
               const card = `
               <tr id=${item._id} class="border-b bg-gray-800 border-gray-700" draggable="true">
                    <th scope="row" class="px-6 py-4 font-medium  text-white whitespace-nowrap">
                         ${item.title}
                    </th>
                    <td class="px-6 py-4">
                         ${item.description}
                    </td>
                    <td class="px-6 py-4 text-center">
                         ${item.importance}
                    </td>
                    <td class="px-6 py-4 text-center">
                         <input type="checkbox" ${item.status ? 'checked' : ''} class=" w-5 h-5"/>
                    </td>
                    <td class="px-6 py-4 flex gap-8">
                         <p id=${item._id} class="delete font-medium text-red-500 hover:underline cursor-pointer">Delete</p>
                         <p class="font-medium text-blue-500 hover:underline cursor-pointer">Edit</p>
                    </td>
               </tr>
              `
               body.innerHTML += card
          })
     }
}