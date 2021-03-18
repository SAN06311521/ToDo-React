import React from 'react';
import {List, ListItemText, ListItem, ListItemAvatar} from '@material-ui/core';
import './Todo.css';

function ToDo(props) {
    return (
        <List>
            <ListItem className="todo_list">
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo} secondary="High time! complete it."/>
            </ListItem>
            {/* <li>{props.todo}</li> */}
        </List>
    )
}

export default ToDo;
