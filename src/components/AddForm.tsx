import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Input, Modal, Upload, Select, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { PlusOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddPost, Post } from "./PostContent";
import { UserContext } from "../context/UserContext";
import axios from "axios";
interface AddFormProps {
  handleSubmit: (post: AddPost) => Promise<void>;
}
interface Group {
  groupId?: number;
  name: string;
}
const AddForm = (props: AddFormProps) => {
  const { user } = useContext(UserContext);
  const initialState = {
    content: "",
    userId: user?.userId,
    groupId: 0,
    imageFile: undefined,
  };
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [post, setPost] = useState(initialState);
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    axios
      .get("https://localhost:44332/api/Group/getallgroup")
      .then((response) => {
        setGroups(response.data);
        console.log(response.data);
      });
  }, []);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  function handleSubmit(e: any) {
    debugger;
    e.preventDefault();
    console.log(post);

    if (!post.content) {
      toast.error("Please fill all the details !", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    props.handleSubmit(post);

    setOpen(false);
  }

  function handleInputChange(event: any) {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  }

  function handleSelectGroup(value: number) {
    console.log(value);
    setPost({ ...post, groupId: value });
  }
  function handleImageChange(event: any) {
    const file = event.target.files[0];
    console.log("File: ", typeof file);
    // if (file) {
    //   setPost({ ...post, imageFile: file.name });
    // }
    setPost({ ...post, imageFile: event.target.files[0] });
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add post
      </Button>
      <Modal
        title="Post content"
        open={open}
        onOk={handleSubmit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
          onFinish={handleSubmit}
        >
          <Form.Item label="Content">
            <TextArea
              value={post.content}
              rows={4}
              name="content"
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="To group" required>
            <Select
              style={{ width: "100%" }}
              onChange={handleSelectGroup}
              options={groups.map((item) => ({
                name: "groupId",
                value: item.groupId,
                label: item.name,
              }))}
            />
          </Form.Item>
          <Form.Item>
            <input
              type="file"
              name="imageFile"
              onChange={handleImageChange}
            ></input>
          </Form.Item>
          <Form.Item label="Upload" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddForm;
