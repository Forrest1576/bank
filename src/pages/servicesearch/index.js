import React, { Component} from 'react';
import Search from './search'
import MyForm from './form'
import { MyFormContent } from './style';
export default class ServiceSearch extends Component{  
    render(){
            return (
              <div>
                <Search/>
                <div style={{height:'30px'}}></div>
                <MyFormContent>
                  <MyForm/>
                </MyFormContent>
              </div>      
            )      
    }
}
