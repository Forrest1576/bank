import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import 'antd/dist/antd.css';
import { HashRouter as Router,Route} from'react-router-dom'
import Home from "./home"
import Add from "./add"
class ServiceAdd extends Component {
    render() {
      const {login}=this.props;
        if(login){
                return (
                    <div>                  
                    <Router>          
                        <Route path="/" exact component={Home}/>
                        <Route path="/add" exact component={Add}/>
                    </Router>
                    </div>
                );
        }else{
          return <Redirect to='/'/>
        }
    }
}
const mapState=(state)=>({
    login:state.getIn(['login','login']),   
  })


export default  connect(mapState,null)(ServiceAdd);
