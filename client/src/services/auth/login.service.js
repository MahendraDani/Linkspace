import axios from "axios";

const apiUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_DEV_API_URL
    : import.meta.env.VITE_PROD_API_URL;

export const LoginUser = async (credentials) => {
  let isError = false;
  try {
    const response = await axios.post(
      `https://linkspace-api.vercel.app/api/auth/login`,
      credentials
    );
    return { isError, response };
  } catch (error) {
    isError = true;
    return { isError, response: error };
  }
};
