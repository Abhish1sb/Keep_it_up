import React, {useState}  from "react";

function CreateArea() {
  
  function handleChange(event){
          console.log(event.target.value);
          console.log(event.target.name);

        }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;