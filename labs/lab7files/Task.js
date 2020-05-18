import React, {Component} from 'react';

export default class Task extends Component{
    constructor(props){
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(e){
        this.props.onDelete(this.props.id);
    }

    render(){
        var itemStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottom: "2px solid #302D38",
            borderLeft: "2px solid #302D38",
            borderRight: "2px solid #302D38",
            padding: "1%",
            backgroundColor: "#BFEBFF"
        };
        var deleteButtonStyle = {
            backgroundColor: "#FF6B6B",
            padding: "0px 3px 0px 3px",
        };
        return(
            <li style={itemStyle}>
                <span>{this.props.name}</span>
                <span style={deleteButtonStyle} onClick={this.onDelete}>X</span>
            </li>
        );
    }
}