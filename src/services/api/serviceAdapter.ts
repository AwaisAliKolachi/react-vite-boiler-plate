// src/services/serviceAdapter.ts

import { API } from "./apiHandler";
import { API_METHODS } from "./appServices.type";

export default async function serviceAdapter<T, reqParams>(
  method: API_METHODS,
  url: string,
  requestParam?: reqParams
): Promise<T> {
  if (navigator.onLine) {
    switch (method) {
      case API_METHODS.GET:
        return API.get(url);
      case API_METHODS.DELETE:
        return API.delete(url, requestParam);
      case API_METHODS.PUT:
        return API.put(url, requestParam);
      case API_METHODS.POST:
        return API.post(url, requestParam);
      default:
        return Promise.reject("REST METHOD NOT EXISTS");
    }
  } else {
    return Promise.reject(new Error("Please check your internet connection."));
  }
}
