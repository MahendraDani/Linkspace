import axios from "axios";
import { apiUrl } from "../../config/apiEndpoints";

export const getAllTagsOfUsersService = async (userID, token) => {
  let isError = false;
  try {
    const response = await axios.get(`${apiUrl}/api/users/tags/all/${userID}`, {
      headers: {
        authorization: token,
      },
    });
    return { isError, response };
  } catch (error) {
    isError = true;
    return { isError, response: error };
  }
};
