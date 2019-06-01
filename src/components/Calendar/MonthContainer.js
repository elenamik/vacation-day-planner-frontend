import React from 'react';
import DayContainer from './DayContainer';

function generateDayNumbers(month,year){
    const first_day = new Date(year, month, 1).getDay(); //returns number of day
    const max_day= new Date(year, month+1, 0).getDate(); // return max number of days
    const day_array=[];
    let iterator=0;
    while (iterator<first_day){
        day_array.push("");
        iterator++;
    }
    for (let i=1;i<=max_day;i++){
        day_array.push(i);
        iterator++;
    }

    const empty_buffer=35-iterator;
    for(let i=0; i<=empty_buffer;i++){
        day_array.push("");
    }

    return day_array;
}

class MonthContainer extends React.Component {
    render(){

        const day_numbers=generateDayNumbers(this.props.month_number,this.props.year);
        const month_number=this.props.month_number;
        const day_array=day_numbers.map((day_number,index)=>
            <DayContainer day_number={day_number} index={index} key={index} month_number={month_number} />
        );
        const day_names=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        const day_names_array=day_names.map((day_name,index)=>
            <div className="day-name">{day_name}</div>)

        return (
            <div className="month-container">
                <div className="month-title">
                    {this.props.month}
                </div>
               
                <div className="days-container">
                    {day_names_array}
                    {day_array.slice(0,7)}
                    {day_array.slice(7,14)}
                    {day_array.slice(14,21)}
                    {day_array.slice(21,28)}
                    {day_array.slice(28,35)}
                </div>
                
            </div>
        );
    } 
}

export default MonthContainer;
