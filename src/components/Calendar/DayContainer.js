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
        if(this.props.day_number){
            this.setState({
                showModal:true,
                render:this.props.day_number
            });
        }
        console.log(this.state);
    }

    async handleModalExit(){

        const element =  document.querySelector('.surface')
        element.classList.add('animated', 'bounceOutLeft')
        await this.forceUpdate()
         this.setState({
             showModal:false})
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

        var active_cell="";
        if (this.props.day_number){
            active_cell="active"
        }

        return (
            <div className={"day-container "+active_cell} onClick={this.handleClick}>
                <div className="day-number">
                    {this.props.day_number}

                    {this.props.entry && <div className="entry">
                        {this.props.entry}
                    </div>}
                   
                    {this.state.showModal && <Modal>
                        <EntryEditor date={date} title="Add a New Entry" onCloseRequest={this.handleModalExit}/>
                    </Modal >}
                </div>
            </div>
        );
       
    } 
}

export default DayContainer;
