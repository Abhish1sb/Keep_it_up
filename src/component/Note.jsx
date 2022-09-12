import React from "react";

function Note(props){
   
    return(
        <div className="note">
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <div className="btn">
                <button className="deleter" ><i className="bi bi-trash"></i></button>
            </div>
        </div>
    )};
export default Note;