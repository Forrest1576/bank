import * as constants from './constants'
import {fromJS} from 'immutable'
//immutable库将focused变为不可直接变更
const defaultState=fromJS({
    data: [],
    loading:false
});
export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_LIST:{
            return state.merge({
                data:fromJS(action.data),
                })
            // const newState=JSON.parse(JSON.stringify(state));//深拷贝之前的数据
            // newState.data=action.data;
            // return newState;
        }
        case constants.CHANGE_LIST1:{
            return state.merge({
                loading:fromJS(action.loading),
                data1:fromJS(action.data1)
                })
        }
        default:{

        }
    }
    return state;
}