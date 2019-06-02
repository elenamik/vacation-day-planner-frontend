import React from 'react';
import Modal from '../Modal/Modal';
import EntryEditor from '../Modal/EntryEditor';

class DayContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showModal:false
        }
    
        this.handleClick=this.handleClick.bind(this);
       
    }

    handleClick(){
        this.setState({
            showModal:true
        });
        console.log(this.state);
    }

    render(){
       var month=this.props.month_number+1;
        if (month<10){
            month="0"+this.props.month_number;
        }
        var day=this.props.day_number;
        if (day<10){
            day="0"+this.props.day_number
        }
     
        const date=this.props.year+"-"+month+"-"+day;
        console.log(date)
        return (
            <div className="day-container" onClick={this.handleClick}>
                <div className="day-number">
                    {this.props.day_number}
                    {this.state.showModal && <Modal>
                        <EntryEditor date={date} title="add a new entry"/>
                    </Modal >}
                </div>
            </div>
        );
    } 
}

export default DayContainer;
