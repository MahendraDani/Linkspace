import axios from "axios";
import { apiUrl } from "../../config/apiEndpoints";

export const getLinkByIdService = async (linkID, token) => {
  let isError = false;
  try {
    const response = await axios.get(`${apiUrl}/api/users/links/${linkID}`, {
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
