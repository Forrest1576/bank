import React, { Component} from 'react';
import {connect} from 'react-redux';
import Header from './component/header';
import MyTable from './component/mytable';
import ServiceMove from './component/servicemove';
import {Redirect} from 'react-router-dom'
class MyService extends Component{  
    render(){
      const login=this.props;
      if(login) {
        return (
          <div>
            <Header/>
            <div style={{height:30}}></div>
            <MyTable/>
            <ServiceMove/>
          </div>      
        )
      } else{
        return <Redirect to='/'/>
      }  
            
        }      
}
//111111
const mapState=(state)=>({
    login:state.getIn(['login','login']),
    data:state.getIn(['enterprise','data']),
    loading:state.getIn(['enterprise','loading'])
    
  })


export default  connect(mapState,null)(MyService);


