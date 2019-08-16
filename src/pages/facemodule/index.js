import React, { Component} from 'react';
import {  Button  } from 'antd';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import {actionCreators} from './store'
class Facemodule extends Component{
    render(){
        return (
            <div>
                <Button onClick={()=>this.props.FaceIdentify()}>识别</Button>                
            </div>
        )
    }
}
const mapState=(state)=>({
    login:state.getIn(['login','login']),
    
  })
  const mapDispatch=(dispatch)=>{
    return{
        FaceIdentify(){
            dispatch(actionCreators.FaceIdentify())
        }
    }
  }
export default  connect(mapState,mapDispatch)(Facemodule);
