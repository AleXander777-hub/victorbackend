import axios from "axios";

//var baseURL = "http://export.mysite";
var baseURL = "https://export.dmitxe.ru";
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

export const full_path = "https://export.dmitxe.ru/uploads/full/";

export const thumb_path = "https://export.dmitxe.ru/uploads/thumbs/";
//http://blog.mysite/api/article/create
