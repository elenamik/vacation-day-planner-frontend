import React from 'react';

class DayContainer extends React.Component {
    render(){
        return (
            <div className="day-container">
                <div className="day-number">
                    {this.props.day_number}
                </div>
                
            </div>
        );
    } 
}

export default DayContainer;
