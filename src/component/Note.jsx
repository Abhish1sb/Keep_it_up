import React from "react";
import Swal from 'sweetalert2'

function Note({ id, title, content, notes, setNotes }){
    const deleteNote = (id) => {
        Swal.fire('The note was deleted')
        setNotes(
          notes.filter((item, index) => {
            return index !== id ? item : null;
          })
        );
      };
    return(
        <div className="note">
            <h4>{title}</h4>
            <p>{content}</p>
            <div className="btn">
                <button onClick={()=>{
                        deleteNote(id);
                    }
                } className="deleter" ><i className="bi bi-trash"></i></button>
            </div>
        </div>
    )};
export default Note;