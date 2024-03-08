import React, { useState } from "react";
import { todoItemsContext } from "./store/todoItemsStore.jsx";
import TodoApp from "./TodoApp.jsx";

function Container() {
  const [list, setList] = useState([]);

  function addList(item, id) {
    setList((cli) => [...cli, { todoItem: item, itemId: id, done: false }]);
    // setList([...list, { todoItem: item, itemId: id, done: false }]);
  }
  function deleteItem(id) {
    let updatedList = list.filter((li) => li.itemId !== id);
    setList(updatedList);
  }
  function markAsDone(id) {
    let updatedList = list.map((li) =>
      li.itemId === id ? { ...li, done: !li.done } : li
    );
    setList(updatedList);
  }
  function selectAll() {
    let updatedList = list.map((li) => ({ ...li, done: true }));
    setList(updatedList);
  }
  const allTodoEssentials = {
    addList,
    list,
    deleteItem,
    markAsDone,
    selectAll,
  };
  return (
    <todoItemsContext.Provider value={allTodoEssentials}>
      <TodoApp />
    </todoItemsContext.Provider>
  );
}

export default Container;
