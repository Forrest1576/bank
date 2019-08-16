import 'antd/dist/antd.css';
import React, { Component} from 'react';
import {connect} from 'react-redux';
import { MyHeader } from '../../style';
class Header extends Component{  
   
    render(){      
        return (
            <MyHeader>
                已办理业务信息    
            </MyHeader>      
            )   
          
      }
     }
  
  
  export default  connect(null,null)(Header);