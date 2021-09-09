import React, { useState } from "react";
// we will need a function to pass this node to the App
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  // event down, is object passed from add button
  function submitNode(event) {
    // we are passing a method that will take a node to App
    props.onAdd(note);
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNode}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
