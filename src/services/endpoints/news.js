import { HttpService } from "../http-service";

const resource = 'latestnews'

const fetchAll = () => {
  return HttpService.get(resource)
}

export const HttpNewsService = {
  fetchAll
}
