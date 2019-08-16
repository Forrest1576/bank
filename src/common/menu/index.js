import React, { Component} from 'react';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';
import { Menu, Icon, Layout} from 'antd';
import {connect} from 'react-redux';
import {SubMeunFontSize,ChildMeunFontSize} from './style'
import '../../pages/login/store'
const { SubMenu }  = Menu;
const {Sider} = Layout;
class Lmenu extends Component {
  constructor(props){
    super(props)
    this.state={
      theme: 'light',
      current: '1',
      collapsed: false,
    }
  }
 
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    const {login2,menu2}=this.props
    console.log(menu2)
    if(login2){
      return (
        <div >
         <Sider 
         width={218} 
         style={{background: '#001529',minHeight:'91vh'}}
         collapsible collapsed={this.state.collapsed} 
         onCollapse={this.onCollapse}
         >  
                        
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              theme='dark'
            >
               {
                 Object.values(menu2).map((item)=>
                <SubMenu
                key={item.id}
                title={
                  <span>
                    <Icon type="user" />
                    <span style={SubMeunFontSize}>{item.title}</span>
                  </span>
                }
                > {
                  item.children.map((it)=>
                  <Menu.Item style={ChildMeunFontSize} key={it.id}><Link to={it.url}>{it.title}</Link></Menu.Item>    
                  )

                }
                   
                </SubMenu>
               ) 
               }  
          </Menu>
        </Sider>
        </div>
      );
    }else{
      return<div></div>
    }
    
  }
}
const mapState=(state)=>({
  login2:state.getIn(['login','login']),
  userId:state.getIn(['login','userId']),
  menu2:state.getIn(['login','menu']),
  
})
export default connect(mapState,null)(Lmenu);
