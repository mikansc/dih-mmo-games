import { HttpService } from "../http-service";

const resource = 'games'

const fetchAll = () => {
  return HttpService.get(resource)
}

export const HttpGamesService = {
  fetchAll
}
