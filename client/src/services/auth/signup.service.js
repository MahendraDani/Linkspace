import axios from "axios";
import { apiUrl } from "../../config/apiEndpoints";

export const SignupUser = async (credentials) => {
  let isError = false;
  try {
    const response = await axios.post(`${apiUrl}/api/auth/signup`, credentials);
    return { isError, response };
  } catch (error) {
    isError = true;
    return { isError, response: error };
  }
};
