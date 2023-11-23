import axios from "axios";
import { apiUrl } from "../../config/apiEndpoints";

export const deleteLinkService = async (linkID, token) => {
  let isError = false;
  try {
    const response = await axios.delete(
      `${apiUrl}/api/users/links/delete/${linkID}`,
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
