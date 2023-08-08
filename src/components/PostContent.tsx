import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button, List, Skeleton } from "antd";
import axios from "axios";
import AddForm from "./AddForm";
import { ToastContainer, toast } from "react-toastify";
import { savePost, deletePost } from "../services/post";
import PostTable from "./PostTable";
import { UserContext } from "../context/UserContext";
import { SearchContext } from "../context/SearchContext";

export interface Post {
  postId?: number;
  content: string;
  fullName?: string;
  groupName?: string;
  userId: number | any;
  groupId: number;
  loading?: boolean;
  postImage?: string;
}
export interface AddPost {
  postId?: number;
  content: string;
  userId: number | any;
  groupId: number;
  imageFile: File | undefined;
}

const PostContent: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const { keyWord } = useContext(SearchContext);
  const [post, setPost] = useState<Post>();
  const [list, setList] = useState<Post[]>([]);
  const [editingItem, setEditingItem] = useState<Post | null>(null);

  const { user } = useContext(UserContext);
  useEffect(() => {}, [posts]);
  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get(`https://localhost:44332/api/Post/getallpost?keyword=${keyWord}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((respose) => {
          setInitLoading(false);
          setPosts(respose.data);
          setList(respose.data);
        });
    }, 500);
    return () => clearTimeout(timer);
  }, [keyWord]);
  async function handleSumbit(post: AddPost) {
    debugger;
    const data = {
      content: post.content,
      userId: user?.userId,
      groupId: post.groupId,
      imageFile: post.imageFile,
    };
    console.log("Data req: ", data);

    try {
      const _post = await savePost(data);
      setPosts((prev) => [...prev, _post]);
      console.log(post);

      //setPosts([...posts, _post]);
      toast.success("Post added successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      console.log("the error has occured: " + error);
    }
  }
  async function handleUpdate(post: Post) {
    // const data = {
    //   content: post.content,
    //   userId: post.userId,
    //   groupId: post.groupId,
    // };
    // try {
    //   const _post = await savePost(post);
    //   // setPosts((prev) => [...prev, _post]);
    //   setPosts([...posts, _post]);
    //   toast.success("Post added successfully", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    //   });
    // } catch (error) {
    //   console.log("the error has occured: " + error);
    // }
  }
  const handleEditClick = (item: Post) => {
    setEditingItem(item);
  };

  const handleSaveEdit = (editedItem: Post) => {
    setPosts((prevItems) =>
      prevItems.map((item) =>
        item.postId === editedItem.postId ? editedItem : item
      )
    );
    setEditingItem(null);
  };
  async function handleDelete(postId: number) {
    if (window.confirm("Are you sure ?")) {
      const _delete = await deletePost(postId);
      setPosts([...posts.filter((x) => x.postId !== postId)]);
      toast.success("Post deleted successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  }

  return (
    <>
      <AddForm handleSubmit={handleSumbit} />

      <PostTable
        listPosts={posts}
        deletePost={handleDelete}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default PostContent;
