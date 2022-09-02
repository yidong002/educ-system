/* eslint-disable react/react-in-jsx-scope */
import { Dropdown, Menu, Space, Row, Col } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons'

const TestDropDown = () => {
  const menu = (
    <Menu items={[
      {
        key: "1",
        label: "list menu item 1"
      },
      {
        key: "2",
        label: "list menu item 2"
      }
    ]} />
  )
  return (
    <>
      <Row>
        <Space>
          基础使用
          <Dropdown overlay={menu}>
            <Space>
              展开菜单
              <DownOutlined />
            </Space>
          </Dropdown>
        </Space>
      </Row>
      <Row gutter={24}>
        <Col span={8}>
          <Space>
            点击展开
            <Dropdown overlay={menu} trigger={['click']}>
              <Space>
                展开菜单
                <DownOutlined />
              </Space>
            </Dropdown>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <Space>
            展开位置{/*bottom bottomLeft bottomRight top topLeft topRight*/}
            <Dropdown overlay={menu} placement="top" trigger={['click']}>
              <Space>
                展开菜单
                <DownOutlined />
              </Space>
            </Dropdown>
          </Space>
        </Col>
      </Row>
    </>
  )
}

export default TestDropDown;