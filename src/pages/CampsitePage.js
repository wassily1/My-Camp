import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { Layout, Menu, List,Descriptions,Rate,Button,PageHeader,Typography,Divider,Input,Select,Card,Image} from 'antd';
import { Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import Rating from '../comp/Rating'
import campsites from '../data/campsites'
const { Meta } = Card;
const { Header, Content, Footer } = Layout;

const CampsitePage = () => {
    const params = useParams()
    const campsite = campsites.find((c) => c._id === params.id) 
    const numRoom = campsite.countAvailable

    return (
    <>
        <div style={{height:1000,padding: '0 50px',marginTop:'2%'}}>
        

        <Row>
          <Col span={2}>
          </Col>
          <Col span={20}>
            <PageHeader
              ghost={false}
              onBack={() => window.history.back()}
              extra={[
                <span></span>,
              ]}
            ></PageHeader>
        <Card style={{backgroundColor:'white',marginTop:'0%'}}>
        <Row>
            <Col span={4}>
                <Image src={campsite.image} height='400px' width='700px' />
            </Col>
            <Col span={12} offset={8}>
    <Descriptions size='middle' layout="vertical" contentStyle={{fontSize:22}} labelStyle={{fontSize:18,fontWeight:'bold'}}>
    <Descriptions.Item label="Name" style={{fontSize:40}}>{campsite.name}</Descriptions.Item>
    <Descriptions.Item label="Category">{campsite.category}</Descriptions.Item>
    <Descriptions.Item label="Rating"><Rate disabled value={campsite.rating} /></Descriptions.Item>
    <Descriptions.Item label="Price"> ${campsite.price} /Camp</Descriptions.Item>
    <Descriptions.Item label="Description" span={2}>{campsite.description}</Descriptions.Item>
    </Descriptions>
    <Button type="primary" size='large' style={{position:'absolute',right:40,bottom:0}}
    icon={<PlusOutlined/>}>
          Reserve
        </Button>
            </Col>


        </Row>


        </Card>

          </Col>

        </Row>
        </div>
    </>
  )
}

export default CampsitePage