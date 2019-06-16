redux steps:
   
   1. install redux
      npm install -s redux react-redux

   2. create action constansts
      export const TEST='TEST'
   
   3. create store
      const default_state={
         entries:[]
      }
      const store=createStore(entries,default_state);
      export default store;

      * import placeholder reducer
      * create an initial application state
      * use createStore to bring redux into it

   4. create reducer
      entries.js:
      function entries(entries=[],action){
         switch(action.type){
            case TEST:
               return [...entries];
            default:
               return [...entries]; 
         }
      }
      * import action constants
      * pass a default entry, in case reducer does not get one passed
      * reducer will take some store properties, and an action, and return modified object

      index.js:
      import { combineReducers } from 'redux';
      import entries from './entries'
      const rootReducer = combineReducers({entries});
      export default rootReducer;
      * allow yourself to add more reducers
      
   
   5. create action creators
      export function test(name){
         return{
            type:TEST,
            name
         }
      }
      * this is the function that gets called when you want to make a change to the store
      * import action constant
      * pass the parameters which the reducer will update in the store
   
   6. inject redux into components - trust the magic
      * choose at what level you would like to use redux (maybe outermost component)
      * import some redux functions for connecting everythin
      * map your store paramters to the state
      * map your action creators to change the state
      * create and export the redux-connected component (wrapping your already existing component)

      add into component file:
         import { bindActionCreators } from 'redux';
         import { connect } from 'react-redux';
         import * as actionCreators from '../actions/actionCreators';

         function mapStateToProps(state) {
            return {entries: state.entries}
            }
         function mapDispatchToProps(dispatch) {
            return bindActionCreators(actionCreators, dispatch);
         }
         const ReduxBoundEntryPoint = connect(mapStateToProps, mapDispatchToProps)(EntryPoint);
         export default ReduxBoundEntryPoint;

       * wrap your redux bound app in a provider
         import ReduxBoundEntryPoint from './components/EntryPoint'
         import store from './store';
         import {Provider} from 'react-redux';
         class App extends Component{
         render(){
            return (
               <Provider store={store}>
                  <ReduxBoundEntryPoint/>
               </Provider>
            )
         }
         }

   7. dispatch action through some component event
      * import store
      * import action creators
      * dispatch action upon an event
      * in event function:
         store.dispatch(test("prop here"))

   8. go back to reducer and add modification to update your store
      * console log your store after each dispatch

      function entries(entries=[],action){
         switch(action.type){
            case TEST:
                  console.log(action.name)
                  return [...entries,action.name]
            default:
                  return entries; 
         }
      }
   export default entries;

   9. pass store data down from redux bound component to component which will use it to render

   design the store and all of the changes you want first, then start coding and adding more reducers
    