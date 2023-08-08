// api.js
import axios from "axios";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
const instance = axios.create({
  baseURL: "https://localhost:44332/api",
  timeout: 10000, // Replace with your API base URL
});

export const useApi = () => {
  const [cookies] = useCookies(["jwt"]); // Replace 'jwtToken' with the actual name of your JWT cookie

  // Add the JWT token to the request header before making the API call
  instance.interceptors.request.use((config) => {
    const token = cookies.jwt;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token.jwt}`;
    }
    return config;
  });

  return instance;
};
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;
      if (status === 400) {
        alert("Username or password is incorrect !");
        toast.error("Username or password is incorrect", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else if (status === 401) {
        alert("Unauthorized !");
        toast.error("Unauthorized !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else if (status === 500) {
        alert("Server Error !");
        toast.error("Server Error !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        alert("Server Error !");
        toast.error("Server Error !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
      console.error("API Error:", error.response);
    } else if (error.request) {
      console.error("No response from server:", error.request);
    } else {
      console.error("Request error:", error.message);
    }
    return Promise.reject(error);
  }
);
export default instance;
