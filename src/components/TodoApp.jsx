import React, { useContext, useRef } from "react";
import "./TodoApp.css";
import { v4 as uuidv4 } from "uuid";
import { todoItemsContext } from "./store/todoItemsStore";

function TodoApp() {
  const todoItem = useRef();
  const{addList, list, deleteItem, markAsDone, selectAll} = useContext(todoItemsContext);
  function addListUsingKeyPress(event) {
    if (event.key === "Enter" && todoItem.current.value !== "") {
      addList(todoItem.current.value, uuidv4());
      todoItem.current.value = "";
    }
  }

  return ( 
    <div className="container">
      <h2>Bucket List</h2>
      <div className="bucket-input">
        <input 
          type="text"
          placeholder="What's on your bucket list?"
          ref={todoItem}
          onKeyUp={addListUsingKeyPress}
          autoFocus
        />
        <span>
          <i className="fa-solid fa-bucket"></i>
        </span>
      </div>
      <div className="bucket-lists">
        <ul>
          {list.map((li) => (
            <li key={li.itemId} className={li.done == true ? "done" : ""}>
               {li.todoItem}
              <div className="control-clicks">
                <i
                  className="fa-solid fa-trash"
                  onClick={() => deleteItem(li.itemId)}
                ></i>
                <i
                  className="fa-solid fa-check"
                  onClick={() => markAsDone(li.itemId)}
                ></i>
              </div>
            </li>
          ))}
        </ul>
        <button id="select-all" onClick={selectAll}>Mark as done All</button>
      </div>
    </div>
  );
}

export default TodoApp;
