import React, { Component} from 'react';
import {connect} from 'react-redux';
import './style.css'
import {Redirect} from 'react-router-dom'
import { HashRouter as Router,Route} from'react-router-dom'
import Home from "./home";
import Add from "./add"
import Check from './check';
class Enterprise extends Component {
    render() {
      const {login}=this.props;
        if(login){
                return (
                    <Router>          
                        <Route path="/" exact component={Home}/>
                        <Route path="/home" exact component={Home}/>
                        <Route path="/add" exact component={Add}/>
                        <Route path="/check/:id" exact component={Check}/>
                    </Router>
                );
        }else{
          return <Redirect to='/'/>
        }
    }
}
const mapState=(state)=>({
    login:state.getIn(['login','login']),
    data:state.getIn(['enterprise','data']),
    loading:state.getIn(['enterprise','loading'])
    
  })


export default  connect(mapState,null)(Enterprise);


