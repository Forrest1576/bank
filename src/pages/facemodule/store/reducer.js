import * as constants from './constants'
import {fromJS} from 'immutable'
//immutable库将focused变为不可直接变更
//从session中读取登陆信息防止刷新时丢失
const defaultState= fromJS({
    data:[],
    
});

export default (state=defaultState,action)=>{
    if(action.type===constants.FACEIDENTIFY){
        return state.merge({
            data:fromJS(action.data),
            })
    }   
    
    return state;
}