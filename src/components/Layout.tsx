import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  GroupOutlined,
  MessageOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Col, Layout, Menu, Row, theme, Image, Button } from "antd";
import SearchBar from "./Searchbar";
import PostContent from "./PostContent";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import { SearchContext } from "../context/SearchContext";
import axios from "axios";

const { Header, Content, Footer, Sider } = Layout;
export interface Group {
  groupId: number;
  name: string;
  menberQuantity: number;
}
export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
}

const Root: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get("https://localhost:44332/api/Group/getallgroup", {})
      .then((respose) => {
        setGroups(respose.data);
      });
    axios
      .get("https://localhost:44332/api/User/getalluser", {})
      .then((respose) => {
        setUsers(respose.data);
      });
  }, []);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { user } = useContext(UserContext);
  const { keyWord } = useContext(SearchContext);

  return (
    <Row>
      <Col span={2} style={{ border: "1px solid #ced0d4" }}>
        <div className="groupLogoLeft">
          <a
            href="
          "
          >
            <img
              className="logoLeft"
              src="https://cdn.icon-icons.com/icons2/2248/PNG/512/facebook_workplace_icon_135651.png"
            ></img>
          </a>
        </div>
        <div className="groupLogoLeft">
          <a href="">
            <img
              className="logoLeft"
              src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
            ></img>
          </a>
        </div>
        <div className="groupLogoLeft">
          <a href="">
            <img
              className="logoLeft"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx958y7mpNMjlQuhAkdMvuz7vgS_5ym7sPcA&usqp=CAU"
            ></img>
          </a>
        </div>
      </Col>
      <Col span={22}>
        <Layout hasSider>
          <Layout className="site-layout">
            <Header>
              <Row>
                <Col span={2} style={{ padding: 3 }}>
                  <Image src="https://assets.website-files.com/5f85cdf8c0babd9853d8f9f0/61d46e19a289044dff840cc9_futurify_logo.svg"></Image>
                </Col>
                <Col span={18} style={{ textAlign: "center" }}>
                  <SearchBar />
                </Col>
                <Col span={4}>
                  {/* <MessageOutlined style={{background:'#fff',width:100,height:100}} /> */}
                </Col>
              </Row>
            </Header>
            <Content
              style={{
                overflow: "initial",
                height: 1000,
              }}
            >
              <div>
                <Row>
                  <Col span={4} style={{ borderRight: "1px solid #ced0d4" }}>
                    <div style={{ padding: 10 }}>
                      <div
                        style={{
                          color: "black",
                          fontSize: 25,
                          fontWeight: "bold",
                        }}
                      >
                        Home
                      </div>
                      {groups.map((item) => (
                        <div className="groupList">
                          <a
                            style={{
                              color: "#050505",
                              fontSize: 17,
                              fontWeight: "500",
                            }}
                          >
                            <Row>
                              <Col span={2}>
                                <img
                                  style={{ width: 30, height: 30 }}
                                  src="https://cdn3.vectorstock.com/i/1000x1000/68/82/teamwork-group-planning-and-creating-icon-vector-21386882.jpg"
                                ></img>
                              </Col>
                              <Col span={22}>
                                <p
                                  style={{
                                    paddingLeft: 20,
                                    paddingTop: 4,
                                  }}
                                >
                                  {item.name}
                                </p>
                              </Col>
                            </Row>
                          </a>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 18, padding: 10 }}>
                      <div
                        style={{
                          color: "black",

                          fontSize: 25,
                          fontWeight: "bold",
                        }}
                      >
                        People
                      </div>
                      {users.map((item) => (
                        <div className="groupList">
                          <a
                            style={{
                              color: "#050505",
                              fontSize: 17,
                              fontWeight: "500",
                            }}
                          >
                            <Row>
                              <Col span={2}>
                                {" "}
                                <img
                                  style={{ width: 30, height: 30 }}
                                  src="https://i.pinimg.com/736x/90/57/0a/90570addee2645866a597530721f37fd.jpg"
                                ></img>
                              </Col>
                              <Col span={22}>
                                {" "}
                                <p
                                  style={{
                                    paddingLeft: 20,
                                    paddingTop: 4,
                                  }}
                                >
                                  {item.lastName} {item.firstName}
                                </p>
                              </Col>
                            </Row>
                          </a>
                        </div>
                      ))}
                    </div>
                  </Col>
                  <Col
                    span={16}
                    style={{
                      backgroundColor: "#f7f8fa",
                      borderRight: "1px solid #ced0d4",
                    }}
                  >
                    <PostContent></PostContent>
                  </Col>
                  <Col span={4} style={{ textAlign: "center" }}>
                    Hello {user?.firstName} {user?.lastName} !!!
                  </Col>
                </Row>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2023 Created by Futurify
            </Footer>
          </Layout>
          <ToastContainer position="bottom-right" />
        </Layout>
      </Col>
    </Row>
  );
};

export default Root;
