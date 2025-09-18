import axios from "../api/axiosconfig";
export const asyncgetusers = async () => {
  try {
    const res = await axios.get("/users");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
