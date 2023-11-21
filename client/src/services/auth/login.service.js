import axios from "axios";

export const LoginUser = async (credentials) => {
  let isError = false;
  try {
    const url = import.meta.env.VITE_API_URL;
    console.log(url);
    const response = await axios.post(`${url}/api/auth/login`, credentials);
    return { isError, response };
  } catch (error) {
    isError = true;
    return { isError, response: error };
  }
};
