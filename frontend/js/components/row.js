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

     render(body, elements) {
          body.innerHTML = ''
          elements.forEach(item => {
               const card = `
               <tr class="border-b bg-gray-800 border-gray-700" draggable="true">
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
                         <input type="checkbox" ${item.status ? 'checked' : ''}/>
                    </td>
                    <td class="px-6 py-4 flex gap-8">
                         <p id='${item._id}' class="delete font-medium text-red-500 hover:underline cursor-pointer">Delete</p>
                         <p class="font-medium text-blue-500 hover:underline cursor-pointer">Edit</p>
                    </td>
               </tr>
              `
               body.innerHTML += card
          })
     }
}