const baseURL = 'http://localhost:4000/api'

async function getData(path) {
     const data = fetch(`${baseURL}/${path}`)
          .then(res => res.json())
          .then(data => data)
     return data
}

async function newList(path, data) {
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

export { getData, newList }