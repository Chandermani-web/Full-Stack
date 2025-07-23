import React, { useEffect, useState } from "react";
import { Todoprovider } from "./Contexts/TodoContext.js";
import TodoForm from "./Components/TodoForm.jsx";
import TodoItem from "./Components/TodoItem.jsx";

const App = () => {
  const [todos, settodos] = useState([]);

  const addTodo = (todo) => {
    settodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    settodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    settodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const Todos = JSON.parse(localStorage.getItem("Todos"));
    if (Todos && Todos.length > 0) {
      settodos(Todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Todoprovider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
                <div key={todo.id} className="w-full">
                    <TodoItem todo={todo} />
                </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
};

export default App;
