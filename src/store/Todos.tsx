import { createContext, useState } from "react";

export const TodosContextAPI = createContext(null);

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return <TodosContextAPI.Provider>{children}</TodosContextAPI.Provider>;
};
