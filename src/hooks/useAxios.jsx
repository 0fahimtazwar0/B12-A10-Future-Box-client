import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://book-haven-server-steel.vercel.app",
});
const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
