import { AppConfig } from "@src/constants";
import axios, { AxiosInstance, AxiosResponse } from "axios";

class APIhandler {
  private readonly axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: this.defaultHeaders(),
      timeout: 10000,
      timeoutErrorMessage: "Slow Network",
      validateStatus(status) {
        return (
          (status >= 200 && status < 300) || status === 400 || status === 401
        );
      },
    });

    // Debugging - optional
    if (AppConfig.ENV === "default") {
      this.axiosInstance.interceptors.request.use((req) => {
        console.log("➡️ Request:", req);
        return req;
      });

      this.axiosInstance.interceptors.response.use((res) => {
        console.log("⬅️ Response:", res);
        return res;
      });
    }
  }

  private defaultHeaders = () => ({
    Accept: "application/json",
    "Content-Type": "application/json",
  });

  private requestHeader = () => {
    const token = localStorage.getItem("access_token"); // or other method
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  private handleBodyResponse = async (
    response: AxiosResponse
  ): Promise<any> => {
    if (response.status === 200) {
      return response.data;
    } else if (response.status === 201) {
      return response.data;
    } else if (response.status === 400) {
      return Promise.reject({
        cause: "400",
        message: response.data?.message || "Bad Request",
        data: response.data || {},
      });
    } else if (response.status === 401) {
      return Promise.reject({
        cause: "401",
        message: "Session expired. Please login again.",
        data: response.data || {},
      });
    } else {
      return Promise.reject({
        cause: response.status.toString(),
        message: response.statusText || "Unknown error",
        data: response.data || {},
      });
    }
  };

  post = async (api: string, data: any): Promise<any> => {
    try {
      const response = await this.axiosInstance.post(api, data, {
        headers: { ...this.defaultHeaders(), ...this.requestHeader() },
      });
      return this.handleBodyResponse(response);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  get = async (api: string, params: any = {}): Promise<any> => {
    try {
      const response = await this.axiosInstance.get(api, {
        headers: { ...this.defaultHeaders(), ...this.requestHeader() },
        params,
      });
      return this.handleBodyResponse(response);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  delete = async (api: string, params: any = {}): Promise<any> => {
    try {
      const response = await this.axiosInstance.delete(api, {
        headers: { ...this.defaultHeaders(), ...this.requestHeader() },
        params,
      });
      return this.handleBodyResponse(response);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  put = async (api: string, data: any = {}): Promise<any> => {
    try {
      const response = await this.axiosInstance.put(api, data, {
        headers: { ...this.defaultHeaders(), ...this.requestHeader() },
      });
      return this.handleBodyResponse(response);
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

// Export with base URL
export const API = new APIhandler(
  AppConfig.API_URL || "http://localhost:5173/api"
);
