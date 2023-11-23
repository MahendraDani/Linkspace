import axios from "axios";
import { apiUrl } from "../../config/apiEndpoints";

export const CreateLinkService = async (
  { title, link, tags },
  userID,
  token
) => {
  let isError = false;
  try {
    const response = await axios.post(
      `${apiUrl}/api/users/links/${userID}`,
      {
        title,
        link,
        tags,
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
