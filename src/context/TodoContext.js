import { createContext, useState } from 'react';
import { useEffect } from 'react';

// Create Context
const TodoContext = createContext();

// Create provider
export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([{id: 1, text: 'First Task'}]);
  const [todoEdit, setTodoEdit] = useState({ item: {}, edit: false });

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem('Todo')));
  }, []);

  useEffect(() => {
    if (todo !== null) {
      localStorage.setItem('Todo', JSON.stringify(todo));
      setTodo(todo)
    }
  }, [todo]);

  const addTodo = (newTodo) => {
    let newId = Math.floor(Math.random() * (99999999 - 1) + 1);
    newTodo.id = newId;
    setTodo([newTodo, ...todo]);
  };

  const updateTodo = (id, todoItem) => {
    setTodo(
      todo.map((item) => (item.id === id ? { ...item, ...todoItem } : item))
    );
    setTodoEdit({ edit: false });
  };

  const editTodo = (item) => {
    setTodoEdit({ item, edit: true});
  };

  const deleteTodo = (id) => {
    if (window.confirm('Você tem certeza que deseja encerrar essa tarefa?')) {
      setTodo(todo.filter((item) => item.id !== id));
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        addTodo,
        todoEdit,
        updateTodo,
        editTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
