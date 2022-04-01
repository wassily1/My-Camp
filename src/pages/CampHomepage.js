import React from 'react'
import '../css/homepage.css';
import { Row, Col, Carousel,Layout,Space } from 'antd'
import campsites from '../data/campsites'
import CampsiteCard from '../comp/CampsiteCard'
const { Header, Content, Footer } = Layout;
const contentStyle = {
  height: '260px',
  color: '#fff',
  lineHeight: '260px',
  textAlign: 'center',
  background: '#364d79',
};

const CampHomepage = () => {
  return (
    <div class="homepage" >
<Content style={{ padding: '20px 50px',margin: '16px 0',}}>
 {/*       <h1>Popular Campsites</h1>*/}
    <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>

{/*        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {campsites.map(campsite => (
                <Col span={5} offset={1} key={campsite._id}>
                    <CampsiteCard campsite={campsite} />
                </Col>
            ))}
        <Col span={2}></Col>
        </Row>*/}
        <Row >
        <Space size={[120,0]} style={{paddingLeft:140}} wrap>
          {campsites.map(campsite => (
                  <>
                    <CampsiteCard campsite={campsite} />
                  </>
            ))}
          {campsites.map(campsite => (
                  <>
                    <CampsiteCard campsite={campsite} />
                  </>
            ))}
        </Space>
        </Row>
      </Content>
    </div>
  )
}

export default CampHomepage