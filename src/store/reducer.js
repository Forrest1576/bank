import {combineReducers} from 'redux-immutable';
import  {reducer as loginReducer} from '../pages/login/store'
import  {reducer as enterpriseReducer} from '../pages/enterprise/store'
import {reducer as individualReducer} from '../pages/individua/store'
const reducer= combineReducers({
    login:loginReducer,
    enterprise:enterpriseReducer,
    individua:individualReducer
})
export default reducer;