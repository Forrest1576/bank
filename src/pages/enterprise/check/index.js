import React, { Component} from 'react';
import { MyFormContent } from '../style';
import 'antd/dist/antd.css';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Form,  Input, Button,Select } from 'antd';
import 'antd/dist/antd.css';
import { PublicHeader } from '../style';
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
class MyCheck extends Component {
constructor(props) {
super(props);
this.state = {
  data:[]
};

}
componentWillMount(){
let url='http://192.168.3.236:8088/CorporateInfo/'+this.props.match.params.id
axios.get(url    
).then((res)=>{
  
    console.log(res.data);
    this.setState({           
      data:res.data,       
      });                 
}).catch((error)=>{
    alert(error)
});
}
saveChange(data){
    console.log(data)
    let url='http://192.168.3.236:8088/CorporateInfo'
        axios.post(url,{
            id:this.props.match.params.id,
            clientName:data.clientName,
            cardNumber:data.cardNumber,
            clientNumber:data.clientNumber,
            contactInformation:data.contactInformation,
            employeesNumber:data.employeesNumber,
            departments:data.departments,
            industry:data.industry,
            privateLending:data.privateLending,
            privateReputation:data.privateReputation,
            governmentBackground:data.governmentBackground,
            productLevel:data.productLevel,
            nationalPatents:data.nationalPatents,
            productSales:data.productSales,
            yearToLive:data.yearToLive,
            guaranteeAmountOne:data.guaranteeAmountOne,
            currencyOne:data.currencyOne,
            guaranteedPledgeMethodOne:data.guaranteedPledgeMethodOne,
            guaranteeAmountTwo:data.guaranteeAmountTwo,
            currencyTwo:data.currencyTwo,
            guaranteedPledgeMethodTwo:data.guaranteedPledgeMethodTwo ,
            managementCharacteristics: data.managementCharacteristics,
            planBeginningYear: data.planBeginningYear,
            yearEndCreditLimit: data.yearEndCreditLimit,
            planCompress: data.planCompress,
            nonPerformingBalance: data.nonPerformingBalance,
            classificationAdjustment: data.classificationAdjustment,
            organiser: data.organiser,
            associatedCustomers: data.associatedCustomers,
            planBeginningYearReal: data.planBeginningYearReal         
        }       
        ).then((res)=>{
            console.log(res);
            const result=res.data;
            
           if(result===1){
                alert("修改成功")
            }else{
              alert("修改失败")
            }  
                           
        }).catch((error)=>{
            alert(error)
        });
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
const { Option} = Select;
    return (
      <div>
              <PublicHeader>
              <h1 style={{fontSize:'20px'}}>修改信息</h1>
            </PublicHeader>   
              <MyFormContent>
            <Form  {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
              <div>
              <div style={{float:'left',width:'40%',marginLeft:'8%'}}>                 
                  <Form.Item label='企业名'>
                  {getFieldDecorator('clientName', {initialValue: this.state.data.clientName,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='客户号'>
                  {getFieldDecorator('clientNumber', {initialValue: this.state.data.clientNumber,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='联系方式'>
                  {getFieldDecorator('contactInformation', {initialValue: this.state.data.contactInformation,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='证件号码'>
                  {getFieldDecorator('cardNumber', {initialValue: this.state.data.cardNumber,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                 
                  <Form.Item label='企业员工人数'>
                  {getFieldDecorator('employeesNumber', {initialValue: this.state.data.employeesNumber,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='不同部门的员工人数'>
                  {getFieldDecorator('departments', {initialValue: this.state.data.departments,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='行业'>
                  {getFieldDecorator('industry', {initialValue: this.state.data.industry,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='是否有民间借贷'>
                  {getFieldDecorator('privateLending', {initialValue: this.state.data.privateLending===0?'否':'是',
                      rules: [],
                  })(
                    <Select     
                    //onChange={this.handleSelectChange}
                  >            
                      <Option value="1">是</Option>
                      <Option value="0">否</Option>
                  </Select>,
                  )}
                  </Form.Item> 
                  <Form.Item label='客户民间声誉情况'>
                  {getFieldDecorator('privateReputation', {initialValue: this.state.data.privateReputation,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='企业法人是否有政府背景'>
                  {getFieldDecorator('governmentBackground', {initialValue: this.state.data.governmentBackground===0?'否':'是',
                      rules: [],
                  })(
                    <Select>            
                      <Option value="1">是</Option>
                      <Option value="0">否</Option>
                    </Select>,
                  )}
                  </Form.Item> 
                  
                  
                  <Form.Item label='新产品认定级别'>
                  {getFieldDecorator('productLevel', {initialValue: this.state.data.productLevel,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='国家级专利个数'>
                  {getFieldDecorator('nationalPatents', {initialValue: this.state.data.nationalPatents,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='产品销售范围'>
                  {getFieldDecorator('productSales', {initialValue: this.state.data.productSales,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='法人代表本地居住年限'>
                  {getFieldDecorator('yearToLive', {initialValue: this.state.data.yearToLive,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='法人代表汽车及不动产价值总额'>
                  {getFieldDecorator('totalValue', {initialValue: this.state.data.totalValue,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  </div>
                  <div style={{float:'right',width:'40%'}}>
                  <Form.Item label='担保金额1'>
                  {getFieldDecorator('guaranteeAmountOne', {initialValue: this.state.data.guaranteeAmountOne,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='币种1'>
                  {getFieldDecorator('currencyOne', {initialValue: this.state.data.currencyOne,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='担保质押方式1'>
                  {getFieldDecorator('guaranteedPledgeMethodOne', {initialValue: this.state.data.guaranteedPledgeMethodOne,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='担保金额2'>
                  {getFieldDecorator('guaranteeAmountTwo', {initialValue: this.state.data.guaranteeAmountOne,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='币种2'>
                  {getFieldDecorator('currencyTwo', {initialValue: this.state.data.currencyOne,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='担保质押方式2'>
                  {getFieldDecorator('guaranteedPledgeMethodTwo', {initialValue: this.state.data.guaranteedPledgeMethodOne,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='关联客户数'>
                  {getFieldDecorator('associatedCustomers', {initialValue: this.state.data.associatedCustomers,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='主办机构'>
                  {getFieldDecorator('organiser', {initialValue: this.state.data.organiser,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='年初固定授信额度'>
                  {getFieldDecorator('planBeginningYearReal', {initialValue: this.state.data.planBeginningYearReal,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='年初计划授信额度'>
                  {getFieldDecorator('planBeginningYear', {initialValue: this.state.data.planBeginningYear,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='年末信用额度'>
                  {getFieldDecorator('yearEndCreditLimit', {initialValue: this.state.data.yearEndCreditLimit,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='计划压缩授信额度'>
                  {getFieldDecorator('planCompress', {initialValue: this.state.data.planCompress,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='不良贷款余额'>
                  {getFieldDecorator('nonPerformingBalance', {initialValue: this.state.data.nonPerformingBalance,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='分类调整'>
                  {getFieldDecorator('governmentBackground', {initialValue: this.state.data.governmentBackground===0?'否':'是',
                      rules: [],
                  })(
                    <Select>            
                      <Option value="1">是</Option>
                      <Option value="0">否</Option>
                    </Select>,
                  )}
                  </Form.Item> 
                  <Button style={{marginRight:'23%',marginLeft:'20%'}} onClick={ ()=>this.saveChange(this.props.form.getFieldsValue())}
                     htmlType="submit"  >
                        保存
                    </Button> 
                    <Button>                    
                        <Link to={'/'}>返回</Link>
                    </Button>
                    <div style={{height:'10px'}}></div>
                  </div>                                    
                  </div>                                      
            </Form>
            </MyFormContent>
            </div>
    );
}
}
const  Check = Form.create()(MyCheck);
export default Check