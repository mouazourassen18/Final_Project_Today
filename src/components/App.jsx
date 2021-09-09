import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  // here you can change note  to newNote that was passed from
  // onAdd
  function addNode(note) {
    setNotes((prev) => {
      return [...prev, note];
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNode} />
      <Note key={1} title="Note title" content="Note content" />
      {notes.map((eachtem) => {
        return <Note key={1} title={eachtem.title} content={eachtem.content} />;
      })}
      {/* // now we add an array in the area   as Note its nuits */}

      <Footer />
    </div>
  );
}

export default App;
