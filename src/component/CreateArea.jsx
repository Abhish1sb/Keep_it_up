import React, {useState} from "react";
import Swal from 'sweetalert2'

function CreateArea({notes,setNotes}) {
  const [data, setdata] = useState({
    title:"",
    content:""
  })

  const submitNote=(event)=>{
    event.preventDefault();
    if(data.title){
      setNotes([...notes,data]);
      setdata({
        title:"",
        content:""
      }) 
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Title Field cannot be empty',
      })
    }

  }

  function handleChange(event){
          const {name,value}= event.target;
          setdata({...data,[name]:value});
        }
  return (
    <div>
      <form>
        <input onChange={handleChange} value={data.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={data.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>
        <i className="bi bi-plus-circle"></i>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;