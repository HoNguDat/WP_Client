import axios from "axios";
import { Post } from "../components/PostContent";
import { API_DELETE, API_POST, HOST } from "../constants/contants";

export const savePost = async (post: Post) => {
  const result = await axios.post(HOST + API_POST, post, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return result.data;
};
export const deletePost = async (postId: any) => {
  const result = await axios.delete(HOST + API_DELETE + postId, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};
