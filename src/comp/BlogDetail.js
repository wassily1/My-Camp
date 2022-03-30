import React from 'react'
import '../css/homepage.css';
import { Card } from 'antd';
import 'antd/dist/antd.css'; 

import { Layout, Menu, Breadcrumb,Avatar,Button,PageHeader,Typography  } from 'antd';
import { Row, Col } from 'antd';
import { useLocation,useParams  } from "react-router-dom";
import blogs from '../data/blogs'
// import HeadNav from './HeadNav';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text, Link  } = Typography;
const { Component } = require("react");
const { Meta } = Card;



// export default class BlogDetail extends Component
const BlogDetail = () =>{
	const params = useParams()
  const blog = blogs.find((c) => c.id === params.id) 
  console.log(blog)
  // const numRoom = campsite.countAvailable

	// state = {
	// 		id:0,
 //      data: []
 //    };
 // 	constructor(props){
 //        super(props);
 //    }

 //  componentDidMount() {
 //      // this.setState({ id: this.props.location.state})

	// 		console.log(this.props.params);
 //  }
 //    // fetching the GET route from the Express server which matches the GET route from server.js
 
	// render(){
	// // const location = useLocation();
	// // 	console.log(location, " useLocation Hook");

		return(
<div style={{height:1000,padding: '0 50px',marginTop:'3%'}}>
		

		<Row>
          <Col span={6}>
              
            <Card hoverable style={{ width: '50%', height:150, marginBottom:50 }}>
                <Meta title='Title' description="Intro..." />
            </Card>
          </Col>
          <Col span={12}>
<PageHeader
		      ghost={false}
		      onBack={() => window.history.back()}
		      title={blog.title}
		      subTitle="subtitle"
		      avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
		      extra={[
		        <Button key="3">Operation</Button>,
		        <Button key="2">Operation</Button>,
		        <Button key="1" type="primary">
		          Primary
		        </Button>,
		      ]}
		    >
		    
		    <Paragraph>
		      {blog.intro}
		    </Paragraph>
		    
		    </PageHeader>
<Card style={{backgroundColor:'white',marginTop:'2%',height:500}}>
<Typography>

    <Paragraph>
      {blog.content}
    </Paragraph>

</Typography>		            
</Card>
          </Col>

          <Col span={1}>
          </Col>
          <Col span={5}>
          <Card hoverable style={{ width: '60%', height:150, marginBottom:50,}}>
                <Meta title="Title" description="Intro..." />
            </Card>
          </Col>

        </Row>
    </div>

			)
	
	// }

}

export default BlogDetail;
