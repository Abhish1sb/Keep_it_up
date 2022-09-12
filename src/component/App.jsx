import React, {useState} from "react";
import Header from "./Header"
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    return(
        <div>
            <Header />
            <CreateArea />
            {/* {notes.map( (obj) => (<Note key={obj.key} title={obj.title} content={obj.content} />) )} */}
            <Note key={1} title="Note title" content="Note content" />
            <Footer />
        </div>
    );
}
export default App;