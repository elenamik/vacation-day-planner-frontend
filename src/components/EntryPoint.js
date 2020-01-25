import React, { Component } from 'react';
import Header from './Header/Header';
import CalendarView from './Calendar/CalendarView';
import Footer from './Footer/Footer';
import HowTo from './Header/HowTo';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators';

class EntryPoint extends Component {
  render () {
    console.log(this.props);
    return (
      <div className='App'>
        <Header />
        <HowTo />
        <CalendarView entries={this.props.entries} />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { entries: state.entries };
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const ReduxBoundEntryPoint = connect(mapStateToProps, mapDispatchToProps)(EntryPoint);
export default ReduxBoundEntryPoint;
// export default App;
