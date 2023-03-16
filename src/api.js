import axios from "axios";
import Cookie from "js-cookie";

const instance = axios.create({
  baseURL:
    "https://artshelter-api.link/",
  // process.env.NODE_ENV === "development"
  //   ? "http://127.0.0.1:8000/"
  //   : "http://artshelter-api.link/",
  withCredentials: true,
});

export const getMe = () =>
  instance.get("login").then((response) => response.data);

export const postLogin = ({ username, password }) =>
  instance.post(
    "login",
    { username, password },
    {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    }
  );

export const getBanner = () =>
  instance.get("api/concerts/banner").then((response) => response.data);

export const getConcertList = (props) =>
  instance
    .get("api/concerts", {
      params: {
        page: props.queryKey[1].currentPage,
        page_size: props.queryKey[1].pageSize,
      },
    })
    .then((response) => response.data);

export const getConcertDetail = (props) =>
  instance
    .get(`api/concerts/${props.queryKey[1].pk}`)
    .then((response) => response.data);

export const getNoticeList = (props) =>
  instance
    .get("api/notices", {
      params: {
        page: props.queryKey[1].currentPage,
        page_size: props.queryKey[1].pageSize,
        q: props.queryKey[1].q,
      },
    })
    .then((response) => response.data);

export const getNoticeDetail = (props) =>
  instance
    .get(`api/notices/${props.queryKey[1].pk}`)
    .then((response) => response.data);

export const getBlogList = (props) =>
  instance
    .get("api/educations", {
      params: {
        page: props.queryKey[1].currentPage,
        page_size: props.queryKey[1].pageSize,
      },
    })
    .then((response) => response.data);

export const postQNA = ({ title, type, contact, content, person }) => {
  instance
    .post(
      "api/qnas/",
      { title, type, contact, content, person },
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};
