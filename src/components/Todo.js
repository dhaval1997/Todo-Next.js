"use client";
import { useCompletedTasks } from "@/store/CompletedTasksContext";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const { completedTasks, addCompletedTask } = useCompletedTasks();

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    const completedTask = updatedTodos[index];
    completedTask.completed = !completedTask.completed;
    setTodos(updatedTodos);

    if (completedTask.completed) {
      addCompletedTask(completedTask.text);
    }
  };

  return (
    <div
      className="mx-auto mt-8 p-4 bg-gray-100 rounded-md"
      style={{ width: 560 }}
    >
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-grow p-2 border rounded-l-md"
          placeholder="Add a new todo"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white py-2 px-6 rounded-r-md"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 border-b ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span>{todo.text}</span>
            <div>
              <button
                onClick={() => toggleTodo(index)}
                className="text-blue-500 hover:text-blue-700 mr-2"
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => removeTodo(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
