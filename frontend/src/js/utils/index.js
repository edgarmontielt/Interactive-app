const baseURL = 'http://localhost:4000/api'

async function getData(path) {
     const data = fetch(`${baseURL}/${path}`)
          .then(res => res.json())
          .then(data => data)
     return data
}

async function createTodo(path, data) {
     const result = fetch(`${baseURL}/${path}`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
     })
          .then(res => res.json())
          .then(data => data)
     return result
}

async function deleteTodo(path, id) {
     const result = fetch(`${baseURL}/${path}`, {
          method: 'DELETE',
          headers: {
               'Content-Type': 'application/json'
          }
     })
          .then(res => res.json())
          .then(data => data)
     return result
}

async function updateStatus(path, id) {
     const result = fetch(`${baseURL}/${path}/${id}`, {
          method: 'PUT',
          headers: {
               'Content-Type': 'application/json'
          }
     })
          .then(res => res.json())
          .then(data => data)
     return result
}

export { getData, createTodo, deleteTodo, updateStatus }