import React, {Component} from 'react';
import ReduxBoundEntryPoint from './components/EntryPoint'
import store from './redux/store'
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

export default App;

