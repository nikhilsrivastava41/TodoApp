import { Button, ListItem, Modal } from '@material-ui/core'
import React, {useState} from 'react'
import { List } from '@material-ui/core';
import { ListItemText} from '@material-ui/core';
import './Todo.css';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
function Todo(props) {
    const [open, setOpen] = useState(false);
    const handleOpen=()=>{
        setOpen(true);
    }
    return ( 
        <>
            <Modal open={open} onClose={e => setOpen(false)}>
                <div>
                <h2> I am a Modal</h2>
                <button onClick={e => setOpen(false)}> Edit </button>
                </div>
            </Modal>
            <List className="todo__list">
                <ListItem>
                    <ListItemText primary="Todo" secondary={props.todo.todo}></ListItemText>
                </ListItem>
                <button onClick={e => setOpen(true)}> Edit</button>
                <DeleteForeverIcon onClick={event=>db.collection('todos').doc(props.todo.id).delete()}/>
            </List>
        </>

    )
}

export default Todo
