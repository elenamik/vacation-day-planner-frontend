import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';

class EntryEditor extends React.Component {
  // this will take options of types, and render contents based on this (react-router)

  constructor(props){
    super(props);
    this.state={
      checked:true
    }
    this.toggleCheck=this.toggleCheck.bind(this);
    this.handleExit=this.handleExit.bind(this);
  }

  toggleCheck(){
    this.setState({
      checked:!this.state.checked
    })
  };

  handleExit(){
    console.log("closing")
    this.props.onCloseRequest()
  }
 
  render(){
   console.log(this.props)
  return (
    <div className="surface">
      <div className="box">
        <div id="modal-title">
          {this.props.title}
        </div>
          <div className="inputs">
            <Input
              placeholder="entry title"
              className="entry-title"
            />
            <TextField
              className="start-date"
              label="start date"
              type="date"
              defaultValue={this.props.date}
              InputLabelProps={{
                shrink: true,
            }}/>
            <TextField
              className="end-date"
              label="end date"
              type="date"
              defaultValue={this.props.date}
              InputLabelProps={{
                shrink: true,
            }}/>
            <div className="check-box">
              subtract from total vacation days:
              <Checkbox
                checked={this.state.checked}
                onChange={this.toggleCheck}
              />
            </div>
          </div>
        
          <div className='buttons'>
            <Fab aria-label="Delete" onClick={()=>this.handleExit()}>
                <DeleteIcon id="fab"/>
            </Fab>
            <Fab aria-label="Add" onClick={this.handleAdd}>
              <AddIcon id="fab"/>
            </Fab>
          </div>
          
          </div>
      
    </div>
  );
  }

}


export default EntryEditor;
