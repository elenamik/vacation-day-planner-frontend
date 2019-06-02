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
  }

  toggleCheck(){
    this.setState({
      checked:!this.state.checked
    })
  };

  render(){
  return (
    <div className="surface">
      <div className="box">
      {this.props.title}

      <Input
      placeholder="entry title"
      />
      <TextField
        className="start-date"
        label="start date"
        type="date"
        defaultValue={this.props.date}
        InputLabelProps={{
          shrink: true,
        }}
      />
        <TextField
        className="end-date"
        label="end date"
        type="date"
        defaultValue={this.props.date}
        InputLabelProps={{
          shrink: true,
        }}
      />
      subtract from total vacation days:
      <Checkbox
      checked={this.state.checked}
      onChange={this.toggleCheck}
        />

     
   
      <Fab disabled aria-label="Delete">
        <DeleteIcon />
      </Fab>
      <Fab disabled aria-label="Add">
        <AddIcon />
      </Fab>
      
      </div>
     
    </div>
  );
  }

}


export default EntryEditor;
