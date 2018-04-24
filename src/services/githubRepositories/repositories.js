import http from './http'

export const getAllRepositories = (userName) => http.get(`users/${userName}/repos`)
