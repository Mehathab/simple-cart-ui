import axios from "axios";

export const getProducts = () => {
  const url = "https://meijerdigital.azurewebsites.net/api/interview ";
  return axios.get(url);
};
