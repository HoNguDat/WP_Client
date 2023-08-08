import axios from "axios";
import { Post } from "../components/PostContent";
import { API_GETALLGROUP, HOST } from "../constants/contants";

export const getAll = async () => {
  const result = await axios.get(HOST + API_GETALLGROUP);
  return result.data;
};

