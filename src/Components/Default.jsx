import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
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
            <p>
              {index + 1}. {item}
            </p>
            <button
              className="btn btn-danger"
              onClick={() => removeFromArray(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
};
