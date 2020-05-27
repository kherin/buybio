import React, { useState } from 'react';
import { Affix, Button, Col, Row, Layout, Card, Badge } from 'antd';
import { ShoppingCartOutlined, SettingOutlined, EditOutlined, EllipsisOutlined, PlusCircleTwoTone, HeartTwoTone, ShoppingTwoTone } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
function App() {
  const [count, setCount] = useState(0);
  const imageURLS = [
    'https://images.pexels.com/photos/890507/pexels-photo-890507.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  ]

  const ProductCard = (url) => {
    return (
      <Card
        style={{ width: '100%' }}
        cover={
          <img
            src={url}
          />
        }
        actions={[
          <PlusCircleTwoTone />,
          <HeartTwoTone />,
          <ShoppingTwoTone onClick={() => setCount(count + 1)} />,
        ]}
      ></Card>
    );
  }
  const headerStyle = {
    height: '50px',
    color: 'white',
    backgroundColor: '#52c41a',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
  };

  const shoppingIcon = {
    height: '50px',
    color: '#52c41a',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
  };

  return (
    <>
      <Affix>
        <Row>
          <Col span={20}>
            <Button type="default" block style={headerStyle} >
              Buy Bio
            </Button>
          </Col>
          <Col span={4}>
            <Button type="default" icon={<Badge count={count} offset={[8, -4]} showZero><ShoppingCartOutlined /></Badge>} block style={shoppingIcon} />
          </Col>
        </Row>
      </Affix>
      <div>
        {imageURLS.map((url) => ProductCard(url))}
      </div>
    </>
  );
}

export default App;
