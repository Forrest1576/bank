import React, { Component} from 'react';
import MyHeader from './component/head'
import MyForm from './component/form'
import { MyFormContent } from '../style';
export default class Add extends Component{  
    render(){
            return (
              <div>
                <MyHeader/>
                <div style={{height:'30px'}}></div>
                <MyFormContent>
                  <MyForm/>
                </MyFormContent>
              </div>      
            )      
    }
}




