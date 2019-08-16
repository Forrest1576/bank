import React, { Component} from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import { TreeSelect } from 'antd';
import { Input,Button} from 'antd';


class Add extends Component {
    constructor(props){
        super(props);
        this.state={
          treeData:[],
          name:'',  
          description:''  
        }
      }
      onChange = value => {
        console.log('onChange ', value);
        this.setState({ value });
      };
      roleNameChange=(event)=>{
        this.setState({
          name:event.target.value
        })
      }
        roledChange=(event)=>{
          this.setState({
            description:event.target.value
          })
      }
      componentDidMount(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://192.168.3.236:8088/treeSysPermission')
        .then(function (res) {
          console.log(res.data)
          _this.setState({
            
            treeData:res.data
          
          });
        })
        .catch(function (error) {
          console.log(error);
          _this.setState({
            error:error
          })
        })
      }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  CreateRole(){
    let url='http://192.168.3.236:8088/sysRole?ids='+this.state.value
        axios.post(url,{
            ids:this.state.value,
            name:this.state.name,
            description:this.state.description           
        }       
        ).then((res)=>{
            console.log(res);
            const result=res.data;
           if(result.msg==="操作成功"){
                alert("添加成功")
                this.props.history.push('/') 
            }else{
              alert("添加失败")
            }                    
        }).catch((error)=>{
            alert(error)
        });
  }


  render() {
    const {treeData}=this.state;
    const tProps = {
      treeData,
      showCheckedStrategy:TreeSelect.SHOW_ALL,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      searchPlaceholder: '请选择',
     
      style: {
        width: 400,
      },
    };
    
    return (
    <div>
      <Input placeholder="角色名" onChange={this.roleNameChange} />
      <Input placeholder="角色描述" onChange={this.roledChange}/>
      <TreeSelect {...tProps} />
      <Button onClick={()=>{this.CreateRole()}}>添加</Button>
      </div>)
  }
}

export default Add;