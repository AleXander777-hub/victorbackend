import axios from "axios-jsonp-pro";
import { toBase64 } from "js-base64";
import { setUserToken, userAPI, userAPI2 } from "../../components/utils";
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
      //url: "http://export.mysite/api/",
      url: "https://export.dmitxe.ru/api/",
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
export const GetAllPosts = ({ perPage = 2, page = 1 } = {}) =>
  async function (dispatch) {
    console.log(page, "Here");
    //blog1 - /api/posts
    //blog2 - http://blog.mysite/api/article
    await axios
      .get("https://export.dmitxe.ru/api/posts", {
        params: {
          "per-page": perPage,
          page: page,
        },
      })
      .then((res) => {
        console.log(res, "POSTS");
        dispatch({
          type: types.GET_ALL_POSTS,
          payload: res.data.items,
          paginate: res.data._meta,
        });
        console.log(res, "Response");
      });
  };
export const BungNewPostPlog = (
  category_id,
  is_commentable,
  is_enabled,
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
      is_enabled,
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

      "BAAAAAAANG"
    );
    console.log(title, "Title");
    console.log(slug, "Slug");
    const config = {
      headers: { Authorization: `Bearer 5fdb72a24a764` },
    };

    const bodyParameters = {
      key: "value",
    };
    const qs = require("querystring");

    /* "category_id": "2",
    "is_commentable": "1",
    "author_id": 8,
    "image": "fgff",
    "annotation": "ddd",
    "text": "ddd",
    "meta_title": "ddd",
    "keywords": "ddd",
    "description": "d",
    "created_at": "2020-12-22 10:37:43",
    "is_enabled": "1",
    "slug": "test",
    "title": "test",
    "updated_at": "2020-12-22 10:37:43",
    "id": 20*/

    userAPI
      .post(
        "/api/posts",
        qs.stringify({
          category_id: category_id,
          is_commentable: is_commentable,
          is_enabled: is_enabled,
          slug: slug,
          title: title,
          meta_title: meta_title,
          keywords: keywords,
          description: description,

          created_at: created_at,
          image: media,
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

    /* .catch((error) => {
        if (error.response) {
          console.log("HERE");
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
  is_enabled,
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
      is_enabled,
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
    /* category_id: category_id,
          is_commentable: is_commentable,
          is_enabled: is_enabled,
          slug: slug,
          title: title,
          meta_title: meta_title,
          keywords: keywords,
          description: description,

          created_at: created_at,
          image: media,
          text: text,
          annotation: annotation,
          author_id: author_id,*/
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
          is_enabled: is_enabled,
          slug: slug,
          title: title,
          meta_title: meta_title,
          keywords: keywords,
          description: description,
          created_at: created_at,
          image: media,
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
