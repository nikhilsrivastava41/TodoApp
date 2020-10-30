import { ListItem } from '@material-ui/core'
import React from 'react'
import { List } from '@material-ui/core';
import { ListItemText} from '@material-ui/core';
import './Todo.css';
function Todo(props) {
    return (
            <List className="todo__list">
                <ListItem>
                    <ListItemText primary="Todo" secondary={props.text}></ListItemText>
                </ListItem>
            </List>
    )
}

export default Todo
