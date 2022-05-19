const baseURL = 'http://localhost:4000/api'

function getData(path) {
     const data = fetch(`${baseURL}/${path}`)
          .then(res => res.json())
          .then(data => data)
     return data
}

function post(path, data) {
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

function deleteTodo(path, id) {
     fetch(`${baseURL}/${path}`, {
          method: 'DELETE',
          headers: {
               'Content-Type': 'application/json'
          }
     })
          .then(res => res.json())
          .then(data => console.log(data))
}

function updateStatus(path, id) {
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

function updateTodo(path, id, data) {
     const result = fetch(`${baseURL}/${path}/${id}`, {
          method: 'PUT',
          headers: {
               'Content-Type': 'application/json'
          },
          body: data
     })
          .then(res => res.json())
          .then(data => data)
     return result
}

export { getData, post, deleteTodo, updateStatus, updateTodo }