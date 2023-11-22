import axios from "axios";

const apiUrl =
  import.meta.env.VITE_VERCEL_ENV === "production"
    ? "https://linkspace-api.vercel.app"
    : "http://localhost:3000";

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
