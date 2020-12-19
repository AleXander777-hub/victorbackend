import axios from "axios";

var baseURL = "http://export.mysite";

export const userAPI = axios.create({
  baseURL,
  /*validateStatus: function (status) {
    return status === 200 && status === 201;
  },*/
});
export const setUserToken = (userAPI, data) => {
  localStorage.setItem("acess_token", data);
  userAPI.defaults.headers.common["Authorization"] = `Bearer ${data}`;
  return data;
};
