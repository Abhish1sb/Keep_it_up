import React from 'react'

const NoteSection = () => {
  return (
    <div>            <CreateArea />
    {/* {notes.map( (obj) => (<Note key={obj.key} title={obj.title} content={obj.content} />) )} */}
    <Note key={1} title="Note title" content="Note content" /></div>
  )
}

export default NoteSection