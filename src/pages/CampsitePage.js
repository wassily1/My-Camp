import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { Layout, Menu, List,Descriptions,Rate,Button,PageHeader,Typography,Divider,Input,Select,Card,Image} from 'antd';
import { Row, Col,Space,Modal,DatePicker } from 'antd';
import { PlusOutlined,MinusOutlined } from '@ant-design/icons';
import moment from 'moment';

import Rating from '../comp/Rating'
import campsites from '../data/campsites'
const { Meta } = Card;
const { Header, Content, Footer } = Layout;
const { Option } = Select;

const CampsitePage = () => {
    const params = useParams()
    const campsite = campsites.find((c) => c._id === params.id) 
    const numRoom = campsite.countAvailable

    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');
    const ButtonGroup = Button.Group;
    const dateFormat = 'YYYY/MM/DD';

    const showModal = () => {
    setVisible(true);
    };

    const handleOk = () => {
      setModalText('The modal will be closed after two seconds');
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    };

    const handleCancel = () => {
      console.log('Clicked cancel button');
      setVisible(false);
    };

    const handleChange=(value) =>{
      console.log(`selected ${value}`);
    }

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
    onClick={showModal}
    icon={<PlusOutlined/>}>
          Reserve
        </Button>
    <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        style={{ top: 200 }}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
        <Space direction="vertical" size={20}>
        <Input placeholder="Name" />
        <Input placeholder="Phone number" />
        <Select defaultValue="option1" style={{ width: 200 }} onChange={handleChange}>
          <Option value="option1">option1</Option>
          <Option value="option2">option2</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
        </Select>
        <DatePicker defaultValue={moment('2022/04/01', dateFormat)} format={dateFormat} />


        <ButtonGroup>

          <Button>
            <MinusOutlined />
          </Button>
          <span style={{marginRight:50,marginLeft:50,fontSize:'bold'}}>1</span>
          <Button >
            <PlusOutlined />
          </Button>
        </ButtonGroup>
        </Space>
    </Modal>
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