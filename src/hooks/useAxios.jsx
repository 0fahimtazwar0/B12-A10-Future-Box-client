import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://b12-a10-future-box-server-m4n3.onrender.com",
});
const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
