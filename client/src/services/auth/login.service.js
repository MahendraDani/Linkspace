import axios from "axios";

export const LoginUser = async (credentials) => {
  let isError = false;
  try {
    const response = await axios.post(
      "https://linkspace-api.vercel.app/api/auth/login",
      credentials
    );
    return { isError, response };
  } catch (error) {
    isError = true;
    return { isError, response: error };
  }
};
