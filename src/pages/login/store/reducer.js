import * as constants from './constants'
import {fromJS} from 'immutable'
//immutable库将focused变为不可直接变更
//从session中读取登陆信息防止刷新时丢失
const defaultState= fromJS({
    login:[],
    username:'',
    userId:'',
    menu:''
});

export default (state=defaultState,action)=>{
    if(action.type===constants.CHANGE_LOGIN){
        sessionStorage.setItem('login',action.value)
        sessionStorage.setItem('username',action.username)
        return state.merge({
            login:fromJS(action.value),
            username:fromJS(action.username),
            userId:fromJS(action.userId),
            })
    }
    if(action.type===constants.CHANGE_MENU){
           //const newState=JSON.parse(JSON.stringify(state));//深拷贝之前的数据
          // newState.menu=action.menu;
          //  return newState;
          sessionStorage.setItem('menu',JSON.stringify((action.menu)))
          return state.merge({
            menu:action.menu
            })
    }
    if(action.type===constants.CHANGE_LOGOUT){
        sessionStorage.setItem('login',action.value)
        sessionStorage.setItem('username','' )
        sessionStorage.setItem('menu','')
        console.log(action.value)
        return state.merge({
            login:fromJS(action.value),
            username:fromJS(''),
            menu:''
            })
    }
    if(action.type===constants.CHANGE_FISTLOGIN){
        return state.merge({
            login:fromJS(action.login),
            username:fromJS(action.username),
            menu:(action.menu),
            })
    }
    
    return state;
}