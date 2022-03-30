import React,{Component} from 'react';
import {Menu,Layout} from 'antd'
// import './HeadNav.less'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {HashRouter,Link,BrowserRouter,Routes,Route} from 'react-router-dom';

import BlogHomepage from './pages/BlogHomepage'
import UserLogin from './comp/UserLogin';
import BlogDetail from './comp/BlogDetail';
import WriteBlog from './comp/WriteBlog';

const { Header, Content, Footer } = Layout;
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
                    onClick={this.handleClick} style={{  zIndex: 1, width: '100%'}}
                    >
            			<Menu.Item key="home"><Link  to="/">Camp-Home</Link></Menu.Item>
                        <Menu.Item key="BlogHomepage"><Link  to="/BlogHomepage">Blog-Home</Link></Menu.Item>
                    </Menu>

            </div>
        )
    }

}
