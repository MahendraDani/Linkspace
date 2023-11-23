import axios from "axios";
import { apiUrl } from "../../config/apiEndpoints";

export const getAllLinksOfUser = async (userID, token) => {
  let isError = false;
  try {
    const response = await axios.get(
      `${apiUrl}/api/users/links/all/${userID}`,
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
