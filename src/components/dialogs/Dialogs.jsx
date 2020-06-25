import React from "react";
import c from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./messages/Message";


const Dialogs = (props) => {
    

  

    let DialogElements = props.state.dialogs.map(el =>{
    return <DialogItem name = {el.name} id = {el.id}/>});

    let MessageElements = props.state.messages.map(m =>{
        return<Message messages = {m.message} id = {m.message}/>})
        
    
    return(
        <div className = {c.content}>
        <div className = {c.dialogs}>
           {DialogElements}
</div>
        <div className = {c.messages}>
            {MessageElements}

        </div>
    </div>

    )
    
}

export default Dialogs;
