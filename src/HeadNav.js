import React,{Component} from 'react';
import {Menu,Layout,Avatar,Image,Dropdown  } from 'antd'
// import './HeadNav.less'
import { AppstoreOutlined, MailOutlined, SettingOutlined,UserOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import {HashRouter,Link,BrowserRouter,Routes,Route} from 'react-router-dom';

import BlogHomepage from './pages/BlogHomepage'
import UserLogin from './comp/UserLogin';
import BlogDetail from './comp/BlogDetail';
import WriteBlog from './comp/WriteBlog';

const { Header, Content, Footer } = Layout;
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

export default class HeadNav extends Component {

    state = {
        current: 'home',
    }
    handleClick=(e)=>{ 
        this.setState({current:e.key});
    }

    render(){
        return (
            <div>
                    <Menu  mode="horizontal" defaultSelectedKeys={[this.state.current]}
                    onClick={this.handleClick} style={{ zIndex: 1, width: '100%',height:60,fontSize:18,fontWeight:'bold'}}
                    >
            			<Menu.Item key="home"><Link  to="/">Camp-Home</Link></Menu.Item>
                        <Menu.Item key="BlogHomepage"><Link  to="/BlogHomepage">Blog-Home</Link></Menu.Item>
                        
                        <div>
                        
                         </div>
                        <Avatar size={50}  src="https://joeschmoe.io/api/v1/random"
                         style={{position:'absolute',right:50,marginTop:6}}/>
                        <Dropdown overlay={menu}  placement="bottomRight" arrow>
                           <Avatar size={50} icon={<UserOutlined />} 
                            style={{position:'absolute',right:50,marginTop:6}}/>
                        </Dropdown>
                        

                    </Menu>


            </div>
        )
    }

}
