import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { Form,  Input, Button } from 'antd';
import 'antd/dist/antd.css';
const formItemLayout = {
    labelCol: {
      xs: { span: 0 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 0 },
      sm: { span: 13 },
    },
  };
class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: {
        value: '123456789',
      },
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;  
        return (
                <Form  {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
                  <div>
                  <div style={{float:'left',width:'40%',marginLeft:'8%'}}>                 
                      <Form.Item label='客户号'>
                      {getFieldDecorator('userId', {initialValue: this.state.number.value,
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input readOnly/>
                      )}
                      </Form.Item> 
                      <Form.Item label='客户名称'>
                      {getFieldDecorator('fname', {
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input 
                          />,
                      )}
                      </Form.Item> 
                      <Form.Item label='证件类型'>
                      {getFieldDecorator('fname', {
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input 
                          />,
                      )}
                      </Form.Item> 
                      <Form.Item label='证件号码'>
                      {getFieldDecorator('fname', {
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input 
                          />,
                      )}
                      </Form.Item> 
                      <Form.Item label='签发机构'>
                      {getFieldDecorator('fname', {
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input 
                          />,
                      )}
                      </Form.Item> 
                      <Form.Item label='签发日期'>
                      {getFieldDecorator('fname', {
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input 
                          />,
                      )}
                      </Form.Item> 
                      <Form.Item label='到期日期'>
                      {getFieldDecorator('fname', {
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input 
                          />,
                      )}
                      </Form.Item> 
                      <Form.Item label='注册资本'>
                      {getFieldDecorator('fname', {
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input 
                          />,
                      )}
                      </Form.Item> 
                      <Form.Item label='注册地址'>
                      {getFieldDecorator('fname', {
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input 
                          />,
                      )}
                      </Form.Item>
                      </div>  
                      <div style={{float:'right',width:'40%'}}>
                      <Form.Item label='客户号'>
                      {getFieldDecorator('userId', {
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input 
                          />,
                      )}
                      </Form.Item> 
                      <Form.Item label='客户名称'>
                      {getFieldDecorator('fname', {
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input 
                          />,
                      )}
                      </Form.Item> 
                      <Form.Item label='证件类型'>
                      {getFieldDecorator('fname', {
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input 
                          />,
                      )}
                      </Form.Item> 
                      <Form.Item label='证件号码'>
                      {getFieldDecorator('fname', {
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input 
                          />,
                      )}
                      </Form.Item> 
                      <Form.Item label='签发机构'>
                      {getFieldDecorator('fname', {
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input 
                          />,
                      )}
                      </Form.Item> 
                      <Form.Item label='签发日期'>
                      {getFieldDecorator('fname', {
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input 
                          />,
                      )}
                      </Form.Item> 
                      <Form.Item label='到期日期'>
                      {getFieldDecorator('fname', {
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input 
                          />,
                      )}
                      </Form.Item> 
                      <Form.Item label='注册资本'>
                      {getFieldDecorator('fname', {
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input 
                          />,
                      )}
                      </Form.Item> 
                      <Form.Item label='注册地址'>
                      {getFieldDecorator('fname', {
                          rules: [{ required: true, message: 'Please input your userId!' }],
                      })(
                          <Input 
                          />,
                      )}
                      </Form.Item>
                      <Button style={{marginRight:'23%',marginLeft:'20%'}} onClick={console.log(this.props.form.getFieldsValue())
                        }  htmlType="submit"  >
                            保存
                        </Button> 
                        <Button>                    
                            <Link to={'/'}>返回</Link>
                        </Button>
                        <div style={{height:'10px'}}></div>
                      </div>                                    
                      </div>                                      
                </Form>
        );
  }
}
const MyForm = Form.create()(Form1);
const mapState=(state)=>({
    login1:state.getIn(['login','login']),
    username:state.getIn(['login','username'])

})
const mapDispath=(dispatch)=>{
    return{
        
        
    }
}
export default connect(mapState,mapDispath)(MyForm);