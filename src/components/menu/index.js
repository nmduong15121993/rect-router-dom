import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { NavLink, useLocation, useParams } from 'react-router-dom';

import "./menu.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const MenuSidebar = () => {
  const [openKey, setOpenKey] = React.useState(['1']);
  const [selectKey, setSelectKey] = React.useState(["key2"]);
  const location = useLocation();
  const para = useParams();

  const [collapsed, setCollapsed] =  React.useState(false);

  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  React.useEffect(() => {
    console.log('Did Mount');
    console.log(location);
    const { pathname } = location;
    if( pathname === "/key1" || pathname === "/key2" ) {
      setOpenKey(['sub1']);
      console.log("setclass");
    }
    
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" style={{color: "red"}} ></div>

        <Menu 
          theme="dark" 
          defaultSelectedKeys={selectKey}
          defaultOpenKeys={openKey} 
          mode="inline"
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <NavLink to="/option1" >Option 1</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <NavLink to="/option1" >Option 2</NavLink>
          </Menu.Item>

          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="key1">
              <NavLink to="/key1" >Tom</NavLink>
            </Menu.Item>
            <Menu.Item key="key2">
             <NavLink to="/key2" >Bill</NavLink>
            </Menu.Item>
            <Menu.Item key="key3">
              <NavLink to="/key3" >Jerry</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />

        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            Bill is a cat.
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export { MenuSidebar };
