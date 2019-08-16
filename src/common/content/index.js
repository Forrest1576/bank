import React, { Component} from 'react';
import { Layout,Breadcrumb} from 'antd';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux'
import {Content1,Layout1,Breadcrumb1, Hidden, Hiddenall,Footer1}from './style'
import Enterprise from '../../pages/enterprise';
import Login from '../../pages/login';
import Creditrate from '../../pages/creditrate';
import Danalysis from '../../pages/danalysis';
import Authority from '../../pages/usermanager';
import Rolemanager from '../../pages/rolemanager';
import Facemodule from '../../pages/facemodule';
import Individual from '../../pages/individua'
import MyService from '../../pages/myservice'
import ServiceAdd from '../../pages/serviceadd'
import Permission from '../../pages/permission'
import { loginCss } from '../../pages/login/style';
import {actionCreators} from '../../pages/login/store'
import ServiceSearch from '../../pages/servicesearch';

class MyContent extends Component{
    /**
     * 生命周期函数，用于判断session中的登录状态11111
     */
    componentWillMount(login,username,menu){
        console.log(menu)
        console.log("生命周期函数")
        this.props.TransFormData(login,username,menu)
    }
    render(){
        const {Content,Footer} = Layout;
        const{login}=this.props;
            return (          
                <Layout style={login?Layout1:Hidden}>
                    <Breadcrumb style={login?Breadcrumb1:Hiddenall}>
                    <Breadcrumb.Item></Breadcrumb.Item>
                    </Breadcrumb>
                     <Content
                      style={login?Content1:loginCss}
                     >   
                        <Route path='/'exact component={Login} /> 
                        <Route path='/enterprise' exact component={Enterprise}/>                                                                                                                                                                                                         
                        <Route path='/creditrate' exact component={Creditrate}/>
                        <Route path='/danalysis' exact component={Danalysis}/>
                        <Route path='/usermanager' exact component={Authority}/>
                        <Route path='/rolemanager' exact component={Rolemanager}/>
                        <Route path='/facemodule' exact component={Facemodule}/>
                        <Route path='/individua' exact component={Individual}/>
                        <Route path='/myservice' exact component={MyService}/>  
                        <Route path='/serviceadd' exact component={ServiceAdd}/> 
                        <Route path='/servicesearch' exact component={ServiceSearch}/>
                        <Route path='/permission' exact component={Permission}/>                                   
                        </Content>
                         <Footer style={login?Footer1:Hiddenall} > ©2018 智慧海洋</Footer>
                    </Layout> 
    
            )  
    }
}
const mapState=(state)=>{//state to props
    return{      
       login:state.getIn(['login','login']),//login下login字段
    }
}
const mapDispath=(dispatch)=>{
    return{
        TransFormData(login,username,menu){
            dispatch(actionCreators.TransFormData(login,username,menu))           
        }
        
    }
}

export default connect(mapState,mapDispath)(MyContent);