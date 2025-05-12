import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import ErrorMsg from "./components/ErrorMsg";
import { useState } from "react";

function App() {
  const [todoItems, settodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);

    settodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    // console.log(`Item Deleted: ${todoItemName}`);
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    settodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleNewItem={handleNewItem} />
      <ErrorMsg todoItems={todoItems}></ErrorMsg>
      <TodoItems
        onDeleteClick={handleDeleteItem}
        todoItems={todoItems}
      ></TodoItems>
    </center>
  );
}

export default App;
