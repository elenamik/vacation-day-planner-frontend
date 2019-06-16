import { createStore } from 'redux'
import entries from './reducers/index';


const default_state={
}

const store=createStore(entries,default_state);
console.log(store.getState())
export default store;