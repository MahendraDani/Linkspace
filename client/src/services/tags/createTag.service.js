import axios from "axios";
import { apiUrl } from "../../config/apiEndpoints";

export const createTagService = async ({ name, purpose }, userID, token) => {
  let isError = false;
  try {
    const response = await axios.post(
      `${apiUrl}/api/users/tags/${userID}`,
      {
        name,
        purpose,
      },
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
