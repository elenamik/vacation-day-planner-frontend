import React, {Component} from 'react';
import Header from './Header/Header';
import CalendarView from './Calendar/CalendarView';
import Footer from './Footer/Footer';
import HowTo from './Header/HowTo';
import OptionsView from './Header/OptionsView';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators';

class EntryPoint extends Component{
  handleClick(){
    axios({
      method:'post',
      url:'https://vacation-day-planner.herokuapp.com/login',
      params:{
        username:'janet',
        password:'catdog12132'
      }
    })
    .then(response =>{
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })
  }
  render(){
      console.log(this.props)
    return (
      <div className="App">
        <Header/>
        <Button onClick={this.handleClick}>Pull data</Button>
        <HowTo/>
        <OptionsView/>
        <CalendarView entries={this.props.entries}/>
        <Footer/>
        </div>
    );
  }
}


function mapStateToProps(state) {
  return {entries: state.entries}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
const ReduxBoundEntryPoint = connect(mapStateToProps, mapDispatchToProps)(EntryPoint);
export default ReduxBoundEntryPoint;
//export default App;

