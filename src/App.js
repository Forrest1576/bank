import React, { Component,Fragment } from 'react';
import { Layout} from 'antd';
import Head from './common/header';
import {BrowserRouter} from 'react-router-dom'
import {GlobalStyle} from "./style";
import {GlobalStyle1} from './statics/iconfont/iconfont.js'
import store from './store';
import {Provider} from 'react-redux';
import Lmenu from './common/menu';
import MyContent from './common/content';
class App extends Component {
    
    render() {
            return (
                <Fragment >
                    <GlobalStyle/>
                    <GlobalStyle1/> 
                    <Provider store={store}>                     
                        <div >                                    
                            <BrowserRouter> 
                                <Layout  >                                                           
                                    <Head />                               
                                    <Layout >
                                    <Lmenu /> 
                                    <MyContent />                                
                                    </Layout> 
                                </Layout>      
                            </BrowserRouter>
                        </div>
                    </Provider>     
                </Fragment>
            )              
    }
}

export default App;

