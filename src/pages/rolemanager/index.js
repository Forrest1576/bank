import 'antd/dist/antd.css';
import React, { Component} from 'react';
import {connect} from 'react-redux';
import RoleHome from './home';
import Add from './add';
import RoleInfoChange from './change'
import {Redirect} from 'react-router-dom'
import { HashRouter as Router,Route} from'react-router-dom'
class RoleManager extends Component{
    render(){
        const {login}=this.props;
        if(login){
            return (               
                <Router>          
                    <Route path="/" exact component={RoleHome}/>
                    <Route path="/add" exact component={Add}/>   
                    <Route path="/change/:id" exact component={RoleInfoChange}></Route>                 
                </Router>
            )
        }     
        else{
            return <Redirect to='/'/>
          }
    }
}
const mapState=(state)=>({
    login:state.getIn(['login','login']),   
  })

export default  connect(mapState,null)(RoleManager);