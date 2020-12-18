import axios from "axios-jsonp-pro";
import { types } from "./types";

export const LoginUser = (username, password) =>
  async function (dispatch) {
    console.log(username, password, "Whats");

    var instance = axios.create({
      validateStatus: function (status) {
        return status == 200;
      },
    });

    await instance
      .post("http://export.mysite/api/", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res, "Hey");

          dispatch({
            type: types.USER_LOGIN,
            payload: username,
          });
          localStorage.setItem("access_token", res.data.access_token);
        } else {
          throw new Error("error");
        }
      })
      .catch((error) => {
        if (error.response) {
          alert(
            "У вас ошибка с кодом" +
              " " +
              error.response.status +
              " " +
              "в ней написано" +
              " " +
              error.response.statusText
          );
          console.log(error.response, "FUUUUCK");
        }
      });
  };
