import React, {Component} from 'react';
import Task from './Task';

export default class TaskList extends Component{
    constructor(props){
        super(props);
        this.state={
            tasks: [],
            textFieldValue: ""
        }
        this.addTask = this.addTask.bind(this);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    handleTextFieldChange(event){
        this.setState({textFieldValue: event.target.value});
    }

    addTask(event){
        event.preventDefault();
        var itemToAdd = { //create new item to add
            name: this.state.textFieldValue,
            id: Date.now() //this ensures each item will always have a unique id
        };
        this.setState({
            textFieldValue: "",
            tasks: [...this.state.tasks, itemToAdd]
        });

        /* Could also achieve this with following code (concat method): */
        // var newTaskList = this.state.tasks.concat(itemToAdd);
        // this.setState({
        //     textFieldValue: '',
        //     tasks: newTaskList,
        // });
    }

    deleteItem(id){
        var newTaskList = this.state.tasks.filter(item => item.id !== id);
        this.setState({
            tasks: newTaskList
        });
        console.log("Item with id " + id + " deleted!");
    }

    TotalDisplay(props){
        if (props.list.length === 0){
            return <p>You don't have any tasks for today!</p>
        } else if(props.list.length === 1){
            return <p>You have {props.list.length} task to complete today.</p>
        } else {
            return <p>You have {props.list.length} tasks to complete today.</p>
        }
    }

    render(){
        var listStyle = {
            backgroundColor: "#6CD4FF",
            color: "#302D38",
            margin: "5%",
            padding:"20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px"
        };
        var h1style = {
            margin: "0px",
            paddingBottom: "1%"
        };
        var inputStyle = {
            backgroundColor: "#6CD4FF",
            color: "#302D38",
            padding: "5%",
            maxWidth: "100%",
            border: "2px solid #302D38",
            borderRadius: "5px",
            marginRight: "3%"
        };
        var buttonStyle = {
            backgroundColor: "#FF6B6B",
            color: "#302D38",
            border: "2px solid #302D38",
            borderRadius: "5px"
        };
        var formStyle = {
            display: "flex",
            flexDirection: "row"
        };
        var ulStyle = {
            listStyle: "none",
            margin: "3% 0% 0% 0%",
            padding: "0px",
            width: "60%",
            borderTop: "2px solid #302D38"
        };

        return(
            <div style={listStyle}>
                <h1 style={h1style}>React To-Do List</h1>
                <div style={formStyle}>
                    <input style={inputStyle} type="text" value={this.state.textFieldValue} onChange={this.handleTextFieldChange}></input>
                    <button style={buttonStyle} onClick={this.addTask}>Add</button>
                </div>
                <ul style={ulStyle}>{this.state.tasks.map(task => <Task key={task.id} id={task.id} name={task.name} onDelete={this.deleteItem}/>)}</ul>
                <this.TotalDisplay list={this.state.tasks}/>
            </div>
        );
    }
}