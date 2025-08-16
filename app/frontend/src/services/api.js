import axios from 'axios'

export const fakestoreapi = axios.create({
  baseURL: 'https://fakestoreapi.com'
})

export const httpbin = axios.create({
  baseURL: 'https://httpbin.org'
})