import axios from "axios";

const apiUrl =
  import.meta.env.VITE_VERCEL_ENV === "production"
    ? import.meta.env.VITE_API_URL_PROD
    : import.meta.env.VITE_API_URL_DEV;

export const LoginUser = async (credentials) => {
  let isError = false;
  try {
    console.log(apiUrl);
    const response = await axios.post(`${apiUrl}/api/auth/login`, credentials);
    return { isError, response };
  } catch (error) {
    isError = true;
    return { isError, response: error };
  }
};
