import React, {useState}  from "react";

function Note(props){
   
    return(
        <div className="note">
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <div className="btn">
                <button className="deleter" ><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    )};
export default Note;