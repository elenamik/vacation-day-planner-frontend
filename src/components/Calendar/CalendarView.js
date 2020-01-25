import React from 'react';
import MonthContainer from './MonthContainer';
import './calendar.css';
import moment from 'moment';

const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const monthly_entry_data = {};

class CalendarView extends React.Component {
  process_entries () {
    console.log('processing entries:');
    const entries = this.props.entries;

    for (var i = 0; i < 12; i++) {
      monthly_entry_data[i] = {};
    }
    for (var i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const month_num = Number(entry.start_date.split('-')[1]) - 1;
      const day_num = Number(entry.start_date.split('-')[2]);

      monthly_entry_data[month_num] = {
        ...monthly_entry_data[month_num],
        ...{ [day_num]: entry.title }
      };
    }
  }

  render () {
    const year = moment().year();
    this.process_entries();
    const month_container_array = months.map((month_title, index) =>
      <MonthContainer month={month_title} month_number={index} year={year} entry_data={monthly_entry_data[index]} />
    );

    return (
      <div className='calendar-view'>
        {month_container_array}
      </div>
    );
  }
}

/* <Modal>
   <ModalGeneric/>
  </Modal> */

export default CalendarView;
