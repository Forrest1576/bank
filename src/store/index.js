import reducer from'./reducer';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    );   

const store = createStore(
    reducer,
    enhancer,
    
);//将reducer传入仓库，使用thunk中间件
//, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export  default store;
