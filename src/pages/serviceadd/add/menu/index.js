
import React, { Component} from 'react';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import { Menu} from 'antd';
import {Link} from 'react-router-dom'
class MyMenu extends Component {
    render() {
                return (                  
                        <Menu
                        theme="black"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '40px',float:'left',marginLeft:'2%',height:'4vh'}}
                        >
                        <Menu.Item key="1"><Link to={'/add#/addbase'}> 客户基本信息 </Link></Menu.Item>
                        <Menu.Item key="2"><Link to={'/add#/addother'}> 客户其他信息 </Link></Menu.Item>
                        <Menu.Item key="3"><Link to={'/add#/addloan'}> 客户贷款信息 </Link></Menu.Item>
                        <Menu.Item key="4"><Link to={'/add#/addloanother'}> 客户贷款其他信息 </Link></Menu.Item>
                        </Menu>                      
                );
    }
}

export default  connect(null,null)(MyMenu);










