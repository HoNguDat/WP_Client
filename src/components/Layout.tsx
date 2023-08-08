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

const Root: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  useEffect(() => {
    axios
      .get("https://localhost:44332/api/Group/getallgroup", {})
      .then((respose) => {
        setGroups(respose.data);
      });
  }, []);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { user } = useContext(UserContext);
  const { keyWord } = useContext(SearchContext);

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          className=""
          style={{
            color: "white",
            paddingTop: 100,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Groups
        </div>
        <div className="demo-logo-vertical" />
        <div style={{ padding: 10 }}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            {groups.map((items) => (
              <Menu.Item key={items.groupId} icon={<UserOutlined />}>
                {items.name}
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0 }}>
          <Row>
            <Col span={2} style={{ padding: 3 }}>
              <Image src="https://assets.website-files.com/5f85cdf8c0babd9853d8f9f0/61d46e19a289044dff840cc9_futurify_logo.svg"></Image>
            </Col>
            <Col span={18} style={{ textAlign: "center" }}>
              <SearchBar />
            </Col>
            <Col span={4}>
              <Row>
                <Col span={8}>
                  <a href="">
                    <Image
                      src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Messenger_colored_svg-512.png"
                      style={{ width: 30, height: 30 }}
                    ></Image>
                  </a>
                </Col>
                <Col span={8}>
                  <a href="">
                    <Image
                      src="https://www.seekpng.com/png/full/38-385679_facebook-bell-notification-icon-facebook-notification-icon.png"
                      style={{ width: 30, height: 30 }}
                    ></Image>
                  </a>
                </Col>
                <Col span={8}>
                  <a href="">
                    <Image
                      src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Messenger_colored_svg-512.png"
                      style={{ width: 30, height: 30 }}
                    ></Image>
                  </a>
                </Col>
              </Row>
              {/* <MessageOutlined style={{background:'#fff',width:100,height:100}} /> */}
            </Col>
          </Row>
        </Header>
        <Content
          style={{ margin: "24px 16px 0", overflow: "initial", height: 1000 }}
        >
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
            }}
          >
            <Row>
              <Col span={20} style={{ backgroundColor: "#f7f8fa" }}>
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
  );
};

export default Root;
