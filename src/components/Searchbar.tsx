import Search from "antd/es/input/Search";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Post } from "./PostContent";
import { SearchContext } from "../context/SearchContext";
import { UserContext } from "../context/UserContext";
interface SearchProps {
  onSearch: (keyword: string) => void;
}
const FormSearch: React.FC = () => {
  const { setKeywordContext } = useContext(SearchContext);
  const [keyword, setKeyword] = useState("");
  const handleInputChange = (event: any) => {
    const { value } = event.target;
    setKeyword(value);
    setKeywordContext(value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get(`https://localhost:44332/api/Post/getallpost?keyword=${keyword}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((respose) => {
          console.log(respose.data);
        });
    }, 1000);
    return () => clearTimeout(timer);
  }, [keyword]);

  return (
    <>
      <Search
        onChange={handleInputChange}
        value={keyword}
        placeholder="Search workplace"
        allowClear
        style={{ width: 500, height: 500, padding: "15px 0px 10px 20px" }}
      />
    </>
  );
};
export default FormSearch;
