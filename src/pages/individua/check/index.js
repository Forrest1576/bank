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
let url='http://192.168.3.236:8088/peasantClient/'+this.props.match.params.id
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
    let url='http://192.168.3.236:8088/peasantClient'
        axios.post(url,{
            id:this.props.match.params.id,
            name:data.name,
            customerId:data.customerId,
            mobilePhone:data.mobilePhone,
            borrowerIdNumber:data.borrowerIdNumber,
            accountManager:data.accountManager,
            householder:data.householder,
            career:data.career,
            certificateType:data.certificateType,
            classificationAdjustment:data.classificationAdjustment,
            createTime:data.createTime,
            customerType:data.customerType,
            dependentPopulation:data.dependentPopulation,
            education:data.education,
            educationExpenses:data.educationExpenses,
            enterHousehold:data.enterHousehold,
            headOfHousehold:data.headOfHousehold,
            householdIdNumber:data.householdIdNumber,
            laborers:data.laborers,
            livingCondition:data.livingCondition,
            managementCharacteristics:data.managementCharacteristics,
            maritalStatus:data.maritalStatus,
            nonPerformingBalance:data.nonPerformingBalance,
            organiser:data.organiser,
            planBeginningYear:data.planBeginningYear,
            planCompress:data.planCompress,
            privateLending:data.privateLending,
            relationship:data.relationship,
            residenceYears:data,
            residentialArea:data.residentialArea,
            residentialValue:data.residentialValue,
            severalResidences:data.severalResidences,
            skillStatus:data.skillStatus,
            socialCredibility:data.socialCredibility,
            socialRelationship:data.socialRelationship,
            spouseIdNumber:data.spouseIdNumber,
            spouseName:data.spouseName,
            spousePhone:data.spousePhone,
            yearEndCreditLimit:data.yearEndCreditLimit            
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
                  <Form.Item label='借款人姓名'>
                  {getFieldDecorator('name', {initialValue: this.state.data.name,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='客户号'>
                  {getFieldDecorator('customerId', {initialValue: this.state.data.customerId,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='证件类型'>
                  {getFieldDecorator('certificateType', {initialValue: this.state.data.certificateType,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='借款人身份证号码'>
                  {getFieldDecorator('borrowerIdNumber', {initialValue: this.state.data.borrowerIdNumber,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                 
                  <Form.Item label='手机'>
                  {getFieldDecorator('mobilePhone', {initialValue: this.state.data.mobilePhone,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='职业'>
                  {getFieldDecorator('career', {initialValue: this.state.data.career,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='学历'>
                  {getFieldDecorator('education', {initialValue: this.state.data.education,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='户口成员数'>
                  {getFieldDecorator('accountMembersNumber', {initialValue: this.state.data.accountMembersNumber,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>                                   
                  <Form.Item label='社会关系'>
                  {getFieldDecorator('socialRelationship', {initialValue: this.state.data.socialRelationship,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='客户类型'>
                  {getFieldDecorator('customerType', {initialValue: this.state.data.customerType,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='管理特征'>
                  {getFieldDecorator('managementCharacteristics', {initialValue: this.state.data.managementCharacteristics,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='是否入户'>
                  {getFieldDecorator('enterHousehold', {initialValue: this.state.data.enterHousehold===0?'否':'是',
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
                  <Form.Item label='是否户主'>
                  {getFieldDecorator('headOfHousehold', {initialValue: this.state.data.headOfHousehold===0?'否':'是',
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
                  <Form.Item label='户主姓名'>
                  {getFieldDecorator('householder', {initialValue: this.state.data.householder,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='与户主的关系'>
                  {getFieldDecorator('relationship', {initialValue: this.state.data.relationship,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='户主证件号码'>
                  {getFieldDecorator('householdIdNumber', {initialValue: this.state.data.householdIdNumber,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  </div>
                  <div style={{float:'right',width:'40%'}}>
                  <Form.Item label='婚姻状况'>
                  {getFieldDecorator('maritalStatus', {initialValue: this.state.data.maritalStatus,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='配偶姓名'>
                  {getFieldDecorator('spouseName', {initialValue: this.state.data.spouseName,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='配偶身份证号码'>
                  {getFieldDecorator('spouseIdNumber', {initialValue: this.state.data.spouseIdNumber,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='配偶手机号码'>
                  {getFieldDecorator('spousePhone', {initialValue: this.state.data.spousePhone,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item> 
                  <Form.Item label='贷款人及其家庭技能状况'>
                  {getFieldDecorator('skillStatus', {initialValue: this.state.data.skillStatus,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='劳动人口数'>
                  {getFieldDecorator('laborers', {initialValue: this.state.data.laborers,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='供养人口数'>
                  {getFieldDecorator('dependentPopulation', {initialValue: this.state.data.dependentPopulation,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='居住状况'>
                  {getFieldDecorator('livingCondition', {initialValue: this.state.data.livingCondition,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='在当地居住年限'>
                  {getFieldDecorator('residenceYears', {initialValue: this.state.data.residenceYears,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='几处住宅'>
                  {getFieldDecorator('severalResidences', {initialValue: this.state.data.severalResidences,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='住宅价值（万元）'>
                  {getFieldDecorator('residentialValue', {initialValue: this.state.data.residentialValue,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='住宅面积（m*m）'>
                  {getFieldDecorator('residentialArea', {initialValue: this.state.data.residentialArea,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='贷款人子女年教育费用'>
                  {getFieldDecorator('educationExpenses', {initialValue: this.state.data.educationExpenses,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>
                  <Form.Item label='民间借贷'>
                  {getFieldDecorator('privateLending', {initialValue: this.state.data.privateLending,
                      rules: [],
                  })(
                      <Input 
                      />,
                  )}
                  </Form.Item>                  
                  <Form.Item label='社会信誉状况'>
                  {getFieldDecorator('socialCredibility', {initialValue: this.state.data.socialCredibility,
                      rules: [],
                  })(
                      <Input 
                      />,
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