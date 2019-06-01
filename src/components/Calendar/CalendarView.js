import React from 'react';
import MonthContainer from './MonthContainer';
import "./calendar.css";
import moment from 'moment';
import Modal from "../Modal/Modal"
import ModalGeneric from "../Modal/ModalGeneric"


class CalendarView extends React.Component {
  render(){
    const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
    const year = moment().year();
    const month_container_array=months.map((month_title,index)=>
      <MonthContainer month={month_title} month_number={index} year={year}/>
    )
    
    return (
      <div className="calendar-view">
       {month_container_array}
      </div>
    );
  }
}

/* <Modal>
   <ModalGeneric/>
  </Modal> */

export default CalendarView;
