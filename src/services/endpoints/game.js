import { HttpService } from "../http-service";

const resource = 'game'

const fetchById = (id) => {
  return HttpService.get(`${resource}?id=${id}`)
}

export const HttpGameService = {
  fetchById
}
