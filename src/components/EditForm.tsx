import React, { useState } from "react";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { PlusOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Post } from "./PostContent";

interface EditFormProps {
  handleUpdate: (post: Post) => Promise<void>;
}

const EditForm = (props: EditFormProps) => {
  const initialState = {
    content: "",
    userId: 0,
    fullName: "",
    groupName: "",
    groupId: 0,
  };
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [post, setPost] = useState(initialState);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  function handleUpdate(e: any) {
    e.preventDefault();
    console.log(post);
    if (!post.content) {
      toast.error("Please fill all the details !", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    props.handleUpdate(post);

    setOpen(false);
  }

  function handleInputChange(event: any) {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit post
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleUpdate}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
          onFinish={handleUpdate}
        >
          <Form.Item label="Content">
            <TextArea
              value={post.content}
              rows={4}
              name="content"
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="GroupId">
            <Input
              name="groupId"
              value={post.groupName}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="UserId">
            <Input
              name="userId"
              value={post.userId}
              onChange={handleInputChange}
            />
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

export default EditForm;
