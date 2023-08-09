import { Item, Table } from "semantic-ui-react";
import { Post } from "./PostContent";
import "semantic-ui-css/semantic.min.css";
import EditForm from "./EditForm";
import React, { useContext, useEffect, useState } from "react";
import App from "../App";
import { Col, Input, Row, Button } from "antd";
import {
  CaretRightOutlined,
  CommentOutlined,
  LikeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
interface PostTable {
  listPosts: Post[];
  deletePost: (postId: any) => void;
  handleUpdate: (post: Post) => Promise<void>;
}

const PostTable = (props: PostTable) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handeLike = () => {
    setButtonClicked(!buttonClicked);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {props.listPosts.map((post) => (
        <div className="postContent">
          <div className="headerPost">
            <div className="ifUser">
              <Row>
                <Col span={1}>
                  {" "}
                  <img
                    src="https://vapa.vn/wp-content/uploads/2022/12/avatar-doremon-cute-001.jpg"
                    className="avatarUser"
                  ></img>
                </Col>
                <Col span={19} style={{ paddingLeft: 8 }}>
                  <span>
                    <strong>{post.fullName}</strong> <CaretRightOutlined />
                    <span>
                      <strong>{post.groupName}</strong>
                    </span>
                  </span>
                  <div className="createAt">{post.createdDateTime}</div>
                </Col>
                <Col span={4}>
                  <Button danger onClick={() => props.deletePost(post.postId)}>
                    Delete post
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="bodyContent">{post.content}</div>
            <div>
              {post.postImage ? (
                <img
                  className="imageContent"
                  src={`https://localhost:44332/images/${post.postImage}`}
                ></img>
              ) : (
                <span></span>
              )}
            </div>
            <div className="interact">
              <Row>
                <Col span={8}>
                  <div>
                    <a
                      className="btnStt"
                      onClick={handeLike}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        color: buttonClicked ? "#2962ff" : "#77797c",
                        backgroundColor: "white",
                      }}
                    >
                      <LikeOutlined
                        style={{
                          paddingRight: 20,
                          fontSize: 20,
                          fontWeight: "bold",
                        }}
                      />
                      <span className="textInteract"> Like</span>
                    </a>
                  </div>
                </Col>
                <Col span={8}>
                  <a className="btnStt" style={{ backgroundColor: "white" }}>
                    <CommentOutlined
                      style={{
                        paddingRight: 20,
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    />
                    <span className="textInteract"> Comment</span>
                  </a>
                </Col>
                <Col span={8}>
                  <a className="btnStt" style={{ backgroundColor: "white" }}>
                    <ShareAltOutlined
                      style={{
                        paddingRight: 20,
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    />
                    <span className="textInteract"> Share</span>
                  </a>
                </Col>
              </Row>
            </div>
            <div className="commentPost">
              <Row>
                <Col span={1}>
                  {" "}
                  <img
                    src="https://yt3.googleusercontent.com/g3j3iOUOPhNxBCNAArBqiYGzHzCBIzr_Al8mdvtBJeZMGFDblnU5rlVUt6GY01AUwm7Cp70J=s900-c-k-c0x00ffffff-no-rj"
                    className="avatarUser"
                  ></img>
                </Col>
                <Col
                  span={23}
                  style={{
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                    paddingLeft: 7,
                  }}
                >
                  <Input
                    style={{ height: 40 }}
                    placeholder="Write a comment..."
                  ></Input>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default PostTable;
