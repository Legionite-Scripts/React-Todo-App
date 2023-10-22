import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export const Default = () => {
  const inputTag = useRef(null);
  const [appended, setAppended] = useState([]);

  const addToArray = function () {
    const newItem = inputTag.current.value;
    if (newItem.trim() !== "") {
      setAppended([...appended, newItem]);
      inputTag.current.value = "";
    } else {
      alert("Please enter an item to be added");
    }
  };

  const removeFromArray = (index) => {
    const updatedAppended = [...appended];
    updatedAppended.splice(index, 1);
    setAppended(updatedAppended);
  };

  const UpdateText = function (index) {
    let updatedText = prompt("Enter New Text : ");
    if (updatedText !== null) {
      // Check if the user canceled the prompt
      const updatedAppended = [...appended];
      updatedAppended[index] = updatedText;
      setAppended(updatedAppended);
    }
  };

  return (
    <Container fluid id="main">
      <h1 className="display-6">React Todo App</h1>
      <div className="container" id="add">
        <input type="text" placeholder="Enter Text" ref={inputTag} />
        <button className="btn btn-success" onClick={addToArray}>
          Add
        </button>
        <button
          onClick={() => location.reload()}
          className="btn btn-success"
          id="refreshBtn"
        >
          Refresh
        </button>
      </div>
      <div className="container" id="addedItems">
        {appended.map((item, index) => (
          <div key={index} className="added-item">
            <p id="todoText">
              {index + 1}. {item}
            </p>
            <button
              className="btn btn-danger"
              id="deleteBtn"
              onClick={() => removeFromArray(index)}
            >
              Delete
            </button>
            <button
              className="btn btn-success"
              id="updateBtn"
              onClick={() => UpdateText(index)}
            >
              Update
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
};
