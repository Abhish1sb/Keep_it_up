import React, {useState} from 'react'
import Note from './Note';
import CreateArea from './CreateArea';


const NoteSection = () => {
  const [notes,setNotes]=useState([]);

    return (
    <div>
    <CreateArea notes={notes} setNotes={setNotes} />
    {notes && notes.map( (obj,ind) => (  <Note key={ind} id={ind} title={obj.title} content={obj.content}
    notes={notes} setNotes={setNotes} />) )};
    </div>
  )
}

export default NoteSection