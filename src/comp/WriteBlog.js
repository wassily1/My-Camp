import '../css/homepage.css';
import { Card } from 'antd';
import 'antd/dist/antd.css'; 

import { Layout, Menu, Breadcrumb,Avatar,Button,PageHeader,Typography,Divider,Input,Select  } from 'antd';
import { Row, Col } from 'antd';
// import HeadNav from './HeadNav';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text, Link  } = Typography;
const { Component } = require("react");
const { Meta } = Card;
const { TextArea } = Input;
const { Option } = Select;

const children = [];
    for (let i = 10; i < 36; i++) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

export default class BlogDetail extends Component{
    handleChange=(value)=>{
        console.log(`Selected: ${value}`);
    }

    render(){
        return(
<div style={{height:1000,padding: '0 50px',marginTop:'2%'}}>
        

        <Row>
          <Col span={6}>
              
            <Card hoverable style={{ width: '50%', height:150, marginBottom:50 }}>
                <Meta title="Title" description="Intro..." />
            </Card>
          </Col>
          <Col span={12}>

            <PageHeader
              ghost={false}
              onBack={() => window.history.back()}
              extra={[
                <span></span>,
              ]}
            ></PageHeader>

<Card style={{backgroundColor:'white',marginTop:'0%'}}>

<Divider orientation="left" orientationMargin={0} style={{fontSize:20}}
>
      Write-your-blog
</Divider>

            <span style={{fontSize:22}}>Title</span>
            <Input size="large" placeholder="" />

            <span style={{fontSize:22}}>Content</span>
            <TextArea rows={25} />

            <span style={{fontSize:22}}>Tags</span>
            <Select
        mode="multiple"
        size="default"
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={this.handleChange}
        style={{ width: '100%' }}
      >
        {children}
      </Select>
      <Row style={{ marginTop: '2%'}}>
      <Col span={21}></Col>
      <Col span={2}>
      <Button type="primary" >Submit</Button>
      </Col>
      </Row>           
</Card>
          </Col>

          <Col span={6}>

          </Col>

        </Row>
    </div>

            )
    
    }

}