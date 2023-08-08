import { Table } from "semantic-ui-react";
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

  const buttonStyle = {
    backgroundColor: isHovered ? "lightblue" : "", // Sử dụng màu xanh dương nhạt khi hover
    transition: "background-color 0.3s ease", // Hiệu ứng mượt mà
  };
  return (
    <>
      <div className="postContent">
        <div className="headerPost">
          <div className="ifUser">
            <Row>
              <Col span={2}>
                {" "}
                <img
                  src="https://vapa.vn/wp-content/uploads/2022/12/avatar-doremon-cute-001.jpg"
                  className="avatarUser"
                ></img>
              </Col>
              <Col span={18}>
                <span>
                  <strong>Ho Ngu Dat</strong> --{" "}
                  <span>
                    <strong>Announcement</strong>
                  </span>
                </span>
                <div className="createAt">{Date.now()}</div>
              </Col>
              <Col span={4}>
                <Button danger>Delete post</Button>
              </Col>
            </Row>
          </div>
          <div className="bodyContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nulla
            vero quam omnis ducimus pariatur ea velit, quidem reprehenderit at,
            vitae unde excepturi architecto laboriosam dicta voluptates
            repellendus reiciendis. Eaque.
          </div>
          <div>
            <img
              className="imageContent"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png"
            ></img>
          </div>
          <div className="interact">
            <div className="btnInteract">
              <Row>
                <Col span={8}>
                  <div className="btnStt">
                    <Button
                      onClick={handeLike}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        color: buttonClicked ? "#2962ff" : "",
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
                    </Button>
                  </div>
                </Col>
                <Col span={8}>
                  <Button style={{ backgroundColor: "white" }}>
                    <CommentOutlined
                      style={{
                        paddingRight: 20,
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    />
                    <span className="textInteract"> Comment</span>
                  </Button>
                </Col>
                <Col span={8}>
                  <Button style={{ backgroundColor: "white" }}>
                    <ShareAltOutlined
                      style={{
                        paddingRight: 20,
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    />
                    <span className="textInteract"> Share</span>
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
          <div className="commentPost">
            <Row>
              <Col span={2}>
                {" "}
                <img
                  src="https://yt3.googleusercontent.com/g3j3iOUOPhNxBCNAArBqiYGzHzCBIzr_Al8mdvtBJeZMGFDblnU5rlVUt6GY01AUwm7Cp70J=s900-c-k-c0x00ffffff-no-rj"
                  className="avatarUser"
                ></img>
              </Col>
              <Col
                span={22}
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <Input placeholder="Write a comment..."></Input>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      {props.listPosts.map((post) => (
        <div className="postContent">
          <div className="headerPost">
            <div className="ifUser">
              <Row>
                <Col span={2}>
                  {" "}
                  <img
                    src="https://vapa.vn/wp-content/uploads/2022/12/avatar-doremon-cute-001.jpg"
                    className="avatarUser"
                  ></img>
                </Col>
                <Col span={18}>
                  <span>
                    <strong>{post.fullName}</strong> <CaretRightOutlined />
                    <span>
                      <strong>{post.groupName}</strong>
                    </span>
                  </span>
                  <div className="createAt">{Date.now()}</div>
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
              <img
                className="imageContent"
                src={`https://localhost:44332/images/${post.postImage}`}
              ></img>
            </div>
            <div className="interact">
              <div className="btnInteract">
                <Row>
                  <Col span={8}>
                    <div className="btnStt">
                      <Button
                        onClick={handeLike}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          color: buttonClicked ? "#2962ff" : "",
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
                      </Button>
                    </div>
                  </Col>
                  <Col span={8}>
                    <Button style={{ backgroundColor: "white" }}>
                      <CommentOutlined
                        style={{
                          paddingRight: 20,
                          fontSize: 20,
                          fontWeight: "bold",
                        }}
                      />
                      <span className="textInteract"> Comment</span>
                    </Button>
                  </Col>
                  <Col span={8}>
                    <Button style={{ backgroundColor: "white" }}>
                      <ShareAltOutlined
                        style={{
                          paddingRight: 20,
                          fontSize: 20,
                          fontWeight: "bold",
                        }}
                      />
                      <span className="textInteract"> Share</span>
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="commentPost">
              <Row>
                <Col span={2}>
                  {" "}
                  <img
                    src="https://yt3.googleusercontent.com/g3j3iOUOPhNxBCNAArBqiYGzHzCBIzr_Al8mdvtBJeZMGFDblnU5rlVUt6GY01AUwm7Cp70J=s900-c-k-c0x00ffffff-no-rj"
                    className="avatarUser"
                  ></img>
                </Col>
                <Col
                  span={22}
                  style={{
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Input placeholder="Write a comment..."></Input>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
};
export default PostTable;
