import React from 'react';
import Header from './components/Header/Header';
import CalendarView from './components/Calendar/CalendarView';
import Footer from './components/Footer/Footer';
import HowTo from './components/Header/HowTo';
import OptionsView from './components/Header/OptionsView';


function App() {
  return (
    
    <div className="App">
      <Header/>
      <HowTo/>
      <OptionsView/>
      <CalendarView/>
      <Footer/>
      </div>
  );
}

export default App;
