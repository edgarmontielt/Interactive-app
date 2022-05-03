const baseURL = 'https://rickandmortyapi.com/api'

export default async function getData(path) {
     const data = await fetch(`${baseURL}/${path}`)

     return data.json()
}