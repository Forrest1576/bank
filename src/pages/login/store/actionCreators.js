import * as constants from './constants'
import axios from 'axios'
const changeLogin=(accout,userId)=>({
    type:constants.CHANGE_LOGIN,
    value:true,
    username:accout,
    userId:userId
})
const changeMenu=(menu)=>({
    type:constants.CHANGE_MENU,
    menu:menu
})
const FistTransLogin=(login,username,menu)=>({
    type:constants.CHANGE_FISTLOGIN,
    login:login,
    username:username,
    menu:menu
})
export const TransFormData=(login,username,menu)=>{
    return(dispatch)=>{
        login=sessionStorage.getItem('login')==='true'?true:false
        username = sessionStorage.getItem('username');
        menu =sessionStorage.getItem('menu')===''?'':JSON.parse(sessionStorage.getItem('menu'));
        dispatch(FistTransLogin(login,username,menu));
    }
     
}
export const login=(accout,password)=>{
   // axios.defaults.headers.post['Content-Type']='application/json'
    let url='http://192.168.3.236:8088/login'
    return(dispatch)=>{
        axios.post(url,{
            username:accout,
            password:password
        }       
        ).then((res)=>{
            console.log(res.data.data.userId);
            const result=res.data;
            const userId=result.data.userId
            let url='http://192.168.3.236:8088/sysPermission/userPermissions/'+res.data.data.userId
           
            axios.get(url    
            ).then((res)=>{             
              let menu=res.data.data
              dispatch(changeMenu(menu))              
            }).catch((error)=>{
                alert(error)
            });
           if(result.status===0){
                dispatch(changeLogin(accout,userId))
            }else{
                alert(result.msg)
            }                    
        }).catch((error)=>{
            alert(error)
        });

    }   



}
export const logout=()=>({
    type:constants.CHANGE_LOGOUT,
    value:false
})
