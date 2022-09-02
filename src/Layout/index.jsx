import { NavLink, useNavigate } from "react-router-dom";
import { Breadcrumb, Layout, Menu, Space } from 'antd';
import { OrderedListOutlined } from '@ant-design/icons'
import "./index.scss";
import { useState } from "react";
import RouterObject from "../router/index";
import React from 'react';

const LayoutComponent = () => {
  const { Header, Content, Sider } = Layout;
  const navigate = useNavigate()
  const [ menuKey, setMenukey] = useState('/useDome')
  const [menu, setMenu] = useState(() => {
    return [
      {
        label: "首页",
        key: "/home"
      },
      {
        label: "UseDome",
        key: "/useDome"
      }
    ]
  })
  const [siderList, setSiderlist] = useState(() => {
    return [
      {
        label: (
          <Space>
            <OrderedListOutlined />
            下拉菜单
          </Space>
        ),
        key: "/dropDown"
      },
      {
        label: "分页",
        key: "/pagination"
      }
    ]
  })
  const [ siderDefault, setSiderDefault] = useState([''])
  const topSelect = (val) => {
    if(val.key == '/home') {
      setSiderlist([
        {
          label: "数据分析",
          key: "/echarts"
        }
      ])
      setSiderDefault([''])
    } else {
      setSiderlist([
        {
          label: (
            <Space>
              <OrderedListOutlined />
              下拉菜单
            </Space>
          ),
          key: "/dropDown"
        },
        {
          label: "分页",
          key: "/pagination"
        }
      ])
    }
  }

  const siderSelect = (val) => {
    navigate(val.key)
  }


  return (
    <Layout>
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={menuKey}
          items={menu}
          onSelect={topSelect}
        />
      </Header>
      <Layout>
        <Sider width={200} className="sider-wrap">
          <Menu
            mode="inline"
            defaultSelectedKeys={siderDefault}
            style={{ height: '100%', borderRight: 0 }}
            items={siderList}
            onSelect={siderSelect}
          />
        </Sider>
        <Layout>
          <Breadcrumb style={{ margin: '16px' }}>
            <Breadcrumb.Item><NavLink to="/home">Home</NavLink></Breadcrumb.Item>
            <Breadcrumb.Item><NavLink to="/useDome">UseDome</NavLink></Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <RouterObject />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent;