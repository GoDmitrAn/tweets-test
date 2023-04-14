import axios from "axios";
axios.defaults.baseURL = "https://64399663bd3623f1b9a3d3b6.mockapi.io/tweets";
export const fetchUsers = async () => {
  try {
    const response = axios("/users");
    return (await response).data;
  } catch (error) {
    console.error(error);
  }
};
