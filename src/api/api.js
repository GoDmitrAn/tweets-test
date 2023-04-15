import axios from "axios";
axios.defaults.baseURL = "https://64399663bd3623f1b9a3d3b6.mockapi.io/tweets";
export const updateUser = async (user) => {
  try {
    await axios.put(`/users/${user.id}`, {
      isFollowing: user.isFollowing,
    });
  } catch (error) {
    console.error(error);
  }
};
