import axios from "axios";
import { apiUrl } from "../../config/apiEndpoints";

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
