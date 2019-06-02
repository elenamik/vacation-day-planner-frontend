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
        this.handleModalExit=this.handleModalExit.bind(this);
    }

    handleClick(){
        this.setState({
            showModal:true
        });
        console.log(this.state);
    }

    async handleModalExit(){
        await this.setState({
            showModal:false
        });
        console.log("clicked exit: ",this.state)
        await this.forceUpdate()
        console.log("post update ",this.state)

    }

    render(){
       var month=this.props.month_number+1;
        if (month<10){
            month="0"+month;
        }
        var day=this.props.day_number;
        if (day<10){
            day="0"+day;
        }
        const date=this.props.year+"-"+month+"-"+day;
        return (
            <div className="day-container" onClick={this.handleClick}>
                <div className="day-number">
                    {this.props.day_number}
                    {this.state.showModal && <Modal>
                        <EntryEditor date={date} title="Add a New Entry" onCloseRequest={this.handleModalExit}/>
                    </Modal >}
                </div>
            </div>
        );
    } 
}

export default DayContainer;
