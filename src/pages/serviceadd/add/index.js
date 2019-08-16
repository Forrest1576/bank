
import React, { Component} from 'react';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import { HashRouter as Router,Route} from'react-router-dom'
import AddBase from './addbase'
import AddLoan from './addloan'
import AddLoanOther from './addloanother'
import AddOther from './addother'
import MyMenu from './menu'
import {MyFormContent,MyHeader} from '../style'
class Add extends Component {
    render() {
                return (
                    <div > 
                        <MyHeader/>
                         <div style={{height:'30px'}}></div>                                 
                        <Router>  
                            <MyMenu/> 
                            <MyFormContent>                                                                                                                           
                            <Route path="/"  component={AddBase}/>
                            <Route path="/addloan"  component={AddLoan}/>
                            <Route path="/addother" component={AddOther}/>
                            <Route path="/addloanother"  component={AddLoanOther}/>
                            </MyFormContent>     
                        </Router>
                        
                    </div>
                );
    }
}

export default  connect(null,null)(Add);










