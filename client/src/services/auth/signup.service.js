import axios from "axios";

export const SignupUser = async ({ name, email, password }) => {
  try {
    const response = await axios.post("http://localhost:3000/api/auth/signup", {
      name: name,
      email: email,
      password: password,
    });

    const token = response.data.accessToken;
    const userName = response.data.user.name;
    const userID = response.data.user.userID;
    localStorage.setItem("token", token);
    localStorage.setItem("userID", userID);
    localStorage.setItem("name", userName);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
