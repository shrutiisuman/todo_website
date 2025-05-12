import { useRef, useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AppTodo({ handleNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    handleNewItem(todoName, dueDate);
  };

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
          ></input>
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement}></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-btn">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AppTodo;
