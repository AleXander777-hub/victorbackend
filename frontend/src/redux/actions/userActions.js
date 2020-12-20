import axios from "axios-jsonp-pro";
import { toBase64 } from "js-base64";
import { setUserToken, userAPI } from "../../components/utils";
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
    }).then((res) => {
      setUserToken(userAPI, res.data.access_token);
      console.log(res.data, "DATA");
      localStorage.setItem("user_data", res.data.id);

      dispatch({
        type: types.USER_LOGIN,
        payload: res.data.id,
      });
    });
  };
export const GetAllPosts = () =>
  async function (dispatch) {
    console.log("Here");

    await axios.get("http://export.mysite/api/posts").then((res) => {
      console.log(res, "POSTS");
      dispatch({
        type: types.GET_ALL_POSTS,
        payload: res.data,
      });
      console.log("there");
    });
  };
export const BungNewPostPlog = (
  category_id,
  is_commentable,
  is_enable,
  slug,
  title,
  meta_title,
  keywords,
  description,
  status,
  created_at,
  media,
  text,
  annotation,
  author_id
) =>
  async function (dispatch) {
    console.log(
      category_id,
      is_commentable,
      is_enable,
      slug,
      title,
      meta_title,
      keywords,
      description,
      status,
      created_at,
      media,
      text,
      annotation,
      author_id,

      "Here"
    );
    const config = {
      headers: { Authorization: `Bearer 5fdb72a24a764` },
    };

    const bodyParameters = {
      key: "value",
    };
    const qs = require("querystring");
    userAPI
      .post(
        "/api/posts",
        qs.stringify({
          category_id: category_id,
          is_commentable: is_commentable,
          is_enable: is_enable,
          slug: slug,
          title: title,
          meta_title: meta_title,
          keywords: keywords,
          description: description,
          status: status,
          created_at: created_at,
          media: media,
          text: text,
          annotation: annotation,
          author_id: author_id,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          console.log(res, "Created");
          dispatch({
            type: types.CREATE_POST,
            payload: res.data,
          });
        } else {
          console.log("Wrong");
          throw new Error("error");
        }
      });

    /*.catch((error) => {
        if (error.response) {
          alert(
            "У вас ошибка с кодом" +
              " " +
              error.response.status +
              " " +
              "в ней написано" +
              " " +
              error.response
            //error.response.data.map((m) => `${m.message}`)
          );
          console.log(error.response, "FUUUUCK");
        }
      });*/
  };
export const PostDelete = (id) =>
  async function (dispatch) {
    console.log(id, "Here");
    try {
      const response = await userAPI.delete(`/api/posts/${id}`).then((res) => {
        console.log(res, "Success");
        return response;
      });
    } catch (error) {
      console.log(error);
    }

    /*.catch((error) => {
          if (error.response) {
            alert(
              "У вас ошибка с кодом" +
                " " +
                error.response.status +
                " " +
                "в ней написано" +
                " " +
                error.response
              //error.response.data.map((m) => `${m.message}`)
            );
            console.log(error.response, "FUUUUCK");
          }
        });*/
  };

export const GetOnePost = (id) =>
  async function (dispatch) {
    console.log(id, "Here");

    await userAPI.get(`/api/posts/${id}`).then((res) => {
      console.log(res, "Success");
      dispatch({
        type: types.GET_ONE_POST,
        payload: res.data,
      });
    });

    /*.catch((error) => {
          if (error.response) {
            alert(
              "У вас ошибка с кодом" +
                " " +
                error.response.status +
                " " +
                "в ней написано" +
                " " +
                error.response
              //error.response.data.map((m) => `${m.message}`)
            );
            console.log(error.response, "FUUUUCK");
          }
        });*/
  };

export const PostUpdate = (
  category_id,
  is_commentable,
  is_enable,
  slug,
  title,
  meta_title,
  keywords,
  description,
  status,
  created_at,
  media,
  text,
  annotation,
  author_id,
  id
) =>
  async function (dispatch) {
    console.log(
      category_id,
      is_commentable,
      is_enable,
      slug,
      title,
      meta_title,
      keywords,
      description,
      status,
      created_at,
      media,
      text,
      annotation,
      author_id,
      id,
      "Here"
    );
    const config = {
      headers: { Authorization: `Bearer 5fdb72a24a764` },
    };

    const bodyParameters = {
      key: "value",
    };
    const qs = require("querystring");
    userAPI
      .put(
        `/api/posts/${id}`,
        qs.stringify({
          category_id: category_id,
          is_commentable: is_commentable,
          is_enable: is_enable,
          slug: slug,
          title: title,
          meta_title: meta_title,
          keywords: keywords,
          description: description,
          status: status,
          created_at: created_at,
          media: media,
          text: text,
          annotation: annotation,
          author_id: author_id,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res, "Created");
          dispatch({
            type: types.UPDATE_POST,
            payload: res.data,
          });
        } else {
          console.log("Wrong");
          throw new Error("error");
        }
      });

    /*.catch((error) => {
          if (error.response) {
            alert(
              "У вас ошибка с кодом" +
                " " +
                error.response.status +
                " " +
                "в ней написано" +
                " " +
                error.response
              //error.response.data.map((m) => `${m.message}`)
            );
            console.log(error.response, "FUUUUCK");
          }
        });*/
  };
export const UserUploadPicture = (file) =>
  async function (dispatch) {
    console.log("UserUpload");
    console.log(file, "DATA");

    const formData = new FormData();
    formData.append("file", file);
    console.log(formData.get("file"), "HERE");

    const response = await userAPI.post(`/api/default/upload`, formData);

    console.log("SENT");

    try {
      console.log("try");
      dispatch({
        type: types.USER_UPLOAD_PICTURE,
        payload: response.data, // что то долго идет дата
      });
      console.log(response, "Uploaded");
      return response;
    } catch (error) {
      console.log("BAD");
    }
  };
