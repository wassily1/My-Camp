import '../css/homepage.css';
import { Card } from 'antd';
import 'antd/dist/antd.css'; 

import { Layout, Menu, Breadcrumb,Avatar,Button,Tabs   } from 'antd';
import { Row, Col } from 'antd';
import { FireOutlined, CalendarOutlined, EditOutlined } from '@ant-design/icons';
import { Link,Routes,Route } from 'react-router-dom';
import BlogDetail from '../comp/BlogDetail';
import WriteBlog from '../comp/WriteBlog';
import blogs from '../data/blogs'

const { Header, Content, Footer } = Layout;
const { Component } = require("react");
const { Meta } = Card;
const { TabPane } = Tabs;



export default class BlogHomepage extends Component{
    state = {
        data: []
    };

    // componentDidMount() {
    //     this.callBackendAPI()
    //     .then(res => this.setState({ data: res.blogsinfo }))
    //     .catch(err => console.log(err));
    // }
    // // fetching the GET route from the Express server which matches the GET route from server.js
    // callBackendAPI = async () => {
    //     const response = await fetch('http://localhost:8000/blogs');
    //     const body = await response.json();

    //     if (response.status !== 200) {
    //       throw Error(body.message) 
    //     }
    //     return body;
    // };    

    render(){

        // const free = []

        // for(var i=0;i<(25-this.state.data.length);i++){
        //     free . push ( <span class="free"></span>)
        // }



        return(

            <div class="homepage">

    <Content style={{ padding: '20px 50px',margin: '16px 0' }}>

      <div className="site-layout-content">

          <Row>
          <Col span={6} style={{paddingTop:73}}>
              
              <Card hoverable style={{ width: '60%', height:150, marginBottom:50 }}
              >
                <Meta title="Title" description="Intro..." />
            </Card>
          </Col>
          <Col span={12}>
          <Tabs defaultActiveKey="1" size='large'>
            <TabPane
              tab={
                <span>
                  <FireOutlined />
                    HOT VIEWED
                </span>
              }
              key="1"
            >
           
                {
                blogs.map((item,index)=>{
                    return(
                    <Link  to={`/BlogDetail/${item.id}`}>
                    <Card hoverable headStyle={{textAlign:'center',fontSize:22,fontWeight:'bold'}} 
                    bodyStyle={{fontSize:18,textAlign:'left',fontWeight:600}} 
                    style={{ width: '100%', height:150, marginBottom:50 ,}}  title={item.title}
                    >
                    <Meta avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />} description={item.intro} />
                    <a style={{position:'absolute',right:'1%',bottom:'1%',fontSize:15,color:'grey',fontWeight:400}}>28/03/22</a>
                    </Card>
                    </Link>
                    )
                })

                }
                <Card hoverable headStyle={{textAlign:'center',fontSize:22,fontWeight:'bold'}} 
                bodyStyle={{fontSize:18,textAlign:'left',fontWeight:600}} 
                style={{ width: '100%', height:150, marginBottom:50 ,}}  title="Title"
                >
                    <Meta avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />} description="Intro..." />
                <a style={{position:'absolute',right:'1%',bottom:'1%',fontSize:15,color:'grey',fontWeight:400}}>28/03/22</a>
                </Card>

                <Card hoverable headStyle={{textAlign:'center',fontSize:22,fontWeight:'bold'}} 
                bodyStyle={{fontSize:18,textAlign:'left',fontWeight:600}} 
                style={{ width: '100%', height:150, marginBottom:50 ,}}  title="Title"
                >
                    <Meta avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />} description="Intro..." />
                <a style={{position:'absolute',right:'1%',bottom:'1%',fontSize:15,color:'grey',fontWeight:400}}>28/03/22</a>
                </Card>
                <Card hoverable headStyle={{textAlign:'center',fontSize:22,fontWeight:'bold'}} 
                bodyStyle={{fontSize:18,textAlign:'left',fontWeight:600}} 
                style={{ width: '100%', height:150, marginBottom:50 ,}}  title="Title"
                >
                    <Meta avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />} description="Intro..." />
                <a style={{position:'absolute',right:'1%',bottom:'1%',fontSize:15,color:'grey',fontWeight:400}}>28/03/22</a>
                </Card>
            </TabPane>   

            <TabPane
              tab={
                <span>
                  <CalendarOutlined />
                  NEW RELEASE
                </span>
              }
              key="2"
            >
                <Card hoverable headStyle={{textAlign:'center',fontSize:22,fontWeight:'bold'}} 
                bodyStyle={{fontSize:18,textAlign:'left',fontWeight:600}} 
                style={{ width: '100%', height:150, marginBottom:50 ,}}  title="Title"
                >
                    <Meta avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />} description="Intro..." />
                <a style={{position:'absolute',right:'1%',bottom:'1%',fontSize:15,color:'grey',fontWeight:400}}>28/03/22</a>
                </Card>
                <Card hoverable headStyle={{textAlign:'center',fontSize:22,fontWeight:'bold'}} 
                bodyStyle={{fontSize:18,textAlign:'left',fontWeight:600}} 
                style={{ width: '100%', height:150, marginBottom:50 ,}}  title="Title"
                >
                    <Meta avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />} description="Intro..." />
                <a style={{position:'absolute',right:'1%',bottom:'1%',fontSize:15,color:'grey',fontWeight:400}}>28/03/22</a>
                </Card>
            </TabPane>       
        </Tabs>
          </Col>
          <Col span={1} ></Col>
          <Col span={5} style={{paddingTop:73}}>
          <Row>
            <Card hoverable style={{ width: '80%', height:250, marginBottom:30 }}
           
                >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            
            </Card>
            <Link  to={`/WriteBlog`}>
              <Button type="primary" style={{width:330,height:60}} size="large"
              icon={<EditOutlined />}
              >Write My Blog</Button>
            </Link>
            </Row>
          </Col>
        </Row>

      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

            </div>            
        )
    }
}