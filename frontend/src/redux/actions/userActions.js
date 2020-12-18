import axios from "axios-jsonp-pro";
import { toBase64 } from "js-base64";
import { types } from "./types";

export const LoginUser = (username, password) =>
  async function (dispatch) {
    console.log(username, password, "Fuck");

    const params = {
      username: username,
      password: password,
    };
    axios({
      method: "get",
      url: "http://export.mysite/api/",
      params: params,
      withCredentials: true,
      headers: {
        Authorization: "Basic " + toBase64(username + ":" + password),
      },
    }).then((res) => console.log(res, "WHAT"));
    console.log("Here");
  };
