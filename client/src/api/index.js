import axios from 'axios'

const API = axios.create({baseURL:"http://localhost:3000"});

export const signIn = (FormData)=> API.post('/auth/login', FormData);