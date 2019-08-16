import 'antd/dist/antd.css';
import React, { Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../../../store';
import { PublicHeader } from '../../../style';
class MyHeader extends Component{  
   
    render(){      
        return (
            <PublicHeader>
                <h1 style={{fontSize:'20px'}}>新增信息</h1>
            </PublicHeader>      
            )   
          
      }
     }
  
  const mapDispatch=(dispatch)=>{
    return{
        ListShow(){
            dispatch(actionCreators.ListShow())
        }
    }
  }
  export default  connect(null,mapDispatch)(MyHeader);