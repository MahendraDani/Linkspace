import axios from "axios";

export const SignupUser = async (credentials) => {
  let isError = false;
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/signup",
      credentials
    );
    return { isError, response };
  } catch (error) {
    isError = true;
    return { isError, response: error };
  }
};
