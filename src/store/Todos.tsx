import { createContext, useState } from "react";

export const TodosContextAPI = createContext(null);

interface Props {
  children: React.ReactNode;
};

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export const TodosProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <TodosContextAPI.Provider value={{ todos, handleAddTodo }}>
      {children}
    </TodosContextAPI.Provider>
  );
};
