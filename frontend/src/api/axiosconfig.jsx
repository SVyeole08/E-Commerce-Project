import axios from "axios";
const instance = axios.create({
  baseURL: "https://e-commerce-project-9-drya.onrender.com",
});
export default instance;