import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { NavLink } from 'react-router-dom';

import "./menu.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const MENU_BAR = {
  user: {
    key: 'sub1',
    subData: [
      { key: 'key1', to: '/key1', inner: 'Tom' },
      { key: 'key2', to: '/key2', inner: 'Bill' },
      { key: 'key3', to: '/key3', inner: 'Jerry' },
    ]
  },
  team: {
    key: 'sub2',
    subData: [
      { key: 'key4', to: '/key4', inner: 'Team 1' },
      { key: 'key5', to: '/key5', inner: 'Team 2' },
    ]
  }
}

const MenuSidebar = () => {
  const [collapsed, setCollapsed] =  React.useState(false);
  const [activeMenuBar, setActiveMenuBar] = React.useState({
    key: 'key1',
    openKey: 'sub1',
  });

  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  React.useEffect(() => {
    const localKeyActive = localStorage.getItem('keyActive');
    if (localKeyActive) {
      const localKeyActivePaser = JSON.parse(localKeyActive);
      setActiveMenuBar(localKeyActivePaser);
    }
  }, []);

  function changeOption(openKey, key) {
    const keyActive = JSON.stringify({ key, openKey });
    localStorage.setItem('keyActive', keyActive);
  }

  console.log(activeMenuBar);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" style={{color: "red"}} ></div>

        <Menu 
          theme="dark"
          key={JSON.stringify(activeMenuBar)}
          defaultOpenKeys={[activeMenuBar.openKey]}
          defaultSelectedKeys={[activeMenuBar.key]}
          mode="inline"
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <NavLink to="/option1" >Option 1</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <NavLink to="/option1" >Option 2</NavLink>
          </Menu.Item>

          {
            Object.keys(MENU_BAR).map((keyMenu) => {

              return (
                <SubMenu key={MENU_BAR[keyMenu]['key']} icon={<TeamOutlined />} title={keyMenu}>
                  { MENU_BAR[keyMenu]['subData'].map(({ key, to, inner }) => (
                    <Menu.Item key={key}>
                      <NavLink onClick={() => changeOption(MENU_BAR[keyMenu]['key'], key)} to={to} >{inner}</NavLink>
                    </Menu.Item>
                  )) }
                </SubMenu>
              )
            })
          }
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
