import axios from "axios";
import { apiUrl } from "../../config/apiEndpoints";

export const deleteTagService = async (tagID, token) => {
  let isError = false;
  try {
    const response = await axios.delete(
      `${apiUrl}/api/users/tags/delete/${tagID}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    return { isError, response };
  } catch (error) {
    isError = true;
    return { isError, response: error };
  }
};
