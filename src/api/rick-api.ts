import axios from "axios";


const rickApi = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
})

export default rickApi;