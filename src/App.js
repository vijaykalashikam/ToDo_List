import React, { useState, useEffect } from "react";
import TodoLists from "./ToDoLists";
import './App.css';

const App = () => {
  const [inputlist, setInputlist] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputlist(event.target.value);
  };

  const listofItems = () => {
    setItems((oldItems) => {
      const newItem = { text: inputlist, id: Date.now() };
      const updatedItems = [...oldItems, newItem];
      localStorage.setItem("TodoItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
    setInputlist("");
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("TodoItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="main_div">
      <div className="top">
      <h1>ToDo List</h1>

      </div>
      <div className="middle">
      <input
          className="form-control input-field"
          type="text"
          placeholder="Add items"
          value={inputlist}
          onChange={itemEvent}
        />
        <button className="btn btn-success sm"  onClick={listofItems}>+</button>

      </div>
      <div className="card">
       
       

        <ol>
          {items.map((item) => 
            <TodoLists
              key={item.id}
              text={item.text}
              onDelete={() => deleteItem(item.id)}
            />
          )}
        </ol>
      </div>
    </div>
  );
};

export default App;
