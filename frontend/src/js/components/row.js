'use strict'

export default class Row {
     constructor() {
          this.btn = document.getElementById('button')
     }

     onClick(callback) {
          const elements = document.querySelectorAll('.delete')
          elements.forEach(item => {
               item.onclick = (event) => {
                    const id = event.target.id.slice(0, -1);
                    callback(id)
               }
          })
     }

     onClickStatus(callback) {
          const elements = document.querySelectorAll('.update')
          elements.forEach(item => {
               item.onclick = (event) => {
                    const id = event.target.id.slice(0, -1);
                    callback(id)
               }
          })
     }

     onClickEdit(callback) {
          const elements = document.querySelectorAll('.edit')
          elements.forEach(item => {
               item.onclick = (event) => {
                    const id = event.target.id.slice(0, -1);
                    callback(id)
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
                    <td class="px-6 py-4 flex justify-center">
                         ${item.importance === 1 ? '<div class="w-4 h-4 rounded-full bg-red-600"></div>' : '<div class="w-4 h-4 rounded-full bg-emerald-600"></div>'}
                         
                    </td>
                    <td class="px-6 py-4 text-center">
                         <input id=${item._id + 1} type="checkbox" ${item.status ? 'checked' : ''} class=" update w-5 h-5"/>
                    </td>
                    
                    <td class="px-6 py-4 flex gap-8 justify-center">
                         <p id=${item._id + 2} class="delete font-semibold text-red-500 hover:underline cursor-pointer">Delete</p>
                         <p id=${item._id + 3} class="edit font-semibold text-blue-500 hover:underline cursor-pointer">Edit</p>
                    </td>
                    <td class="px-3 py-4 gap-8 text-center">
                         ${item.createdAt.split('T')[0]}
                    </td>
                    <td class="px-3 py-4 gap-8 text-center">
                         ${item.createdAt.split('T')[1].split(':', 2).join(':')}
                    </td>
               </tr>
              `
               body.innerHTML += card
          })
     }
}