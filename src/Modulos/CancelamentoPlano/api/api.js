import axios from "axios";
import urlAmbiente from "../utils/urlAmbiente";

let headers = {};

//TODO: Trocar para pegar das props do liferay
const api = axios.create({
  //baseURL: `${urlAmbiente()}/beneficiario/v3/`,
  baseURL: `https://api-preproducao.portalunimed.com.br/beneficiario/v3/`,
  headers: headers,
});

api.interceptors.request.use(
  async (config) => {
    //TODO: A princípio a api do liferay não terá token, avaliar após api gateway estar pronto
    const token =
      "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHbElMV25TMGNfbHBENDFpdFk0M3FTMVdiN1N0Y3p1bVlET0o5TmJxYVJnIn0.eyJqdGkiOiJkNTEwM2VlMS1mMmViLTQ0YWItODA5Yi0zNDMyMDVhNTY5ZDYiLCJleHAiOjE2NDE4MzMyMTksIm5iZiI6MCwiaWF0IjoxNjQxODMzMTU5LCJpc3MiOiJodHRwczovL3ByZXByb2QtYWNlc3NvLnVuaW1lZC5jb29wLmJyL2F1dGgvcmVhbG1zL2JlbmVmaWNpYXJpbyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJkOGRkYzc1Ni1mOGNhLTRjYTItYWIzYy1hOTA4NTE5NWM5ZDUiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJrY19mb3JtIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiMzA5MTIxMGYtYjYzYy00MWM3LTk2NTEtMmJkYmJjZmViOTQwIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiY2FydGFvIjpbIjAwMjUyMzA1NTUzNzgwMDAwIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJjcGYiOiIwMTAyMDE1ODk5OSIsIm5hbWUiOiJQQVVMTyBSIEJFU0VOIERBIFZFTlRVUkEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIwMTAyMDE1ODk5OSIsImdpdmVuX25hbWUiOiJQQVVMTyIsImZhbWlseV9uYW1lIjoiUiBCRVNFTiBEQSBWRU5UVVJBIiwiZW1haWwiOiJwYXVsby52ZW50dXJhQGd4Mi5jb20uYnIifQ.QkzoodkZnEg_eZB7vwreoBgi_wcdNP6zdppT6-QoeDHlSJUiiqv4MjU1S7EhZvceYy522u3DUvjkfWNYHqgs8GjBB_6y8SLOP1T4T8m4ESXzjdNHNRBF4kMPi6rI6V3XzZa-zLGwbgs9sdn2CzqQTLV78qtlTnOdkX82rluMXhPHFs8-AP4xrUu0i2Mu3YTZwi_zHk5cAaV1iu3qDgdYJxlIXIhbEiYcqxwxuUx88Z5-VwzXXNBlRC02zjnxJ4Un4Eob9IkK5BztB5wS8oCntu5804mqfevUZoB1i3pOYS32Lwn640uGOi8NrftuMWj7gLTomHhcqGlVqjnVi4gxGw";

    if (config.headers)
      config.headers.Authorization = `Bearer ${
        token
      }`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
