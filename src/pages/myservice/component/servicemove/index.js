import 'antd/dist/antd.css';
import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Modal, Button, Input } from 'antd';
class ServiceMove extends Component{  
      state = { visible: false };   
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      render() {
        return (
          <div>
            <Button type="primary" onClick={this.showModal}>
              业务移交
            </Button>
            <Modal
              title="业务移交"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <span> 移交对象姓名<Input/></span> 
              <span> 移交对象工号<Input/></span>   
            </Modal>
          </div>
        );
      }
    }
  export default  connect(null,null)(ServiceMove);