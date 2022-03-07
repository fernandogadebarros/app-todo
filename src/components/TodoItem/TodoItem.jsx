import { TodoItemArea } from './styles';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';

import { useContext } from 'react';

import TodoContext from '../../context/TodoContext';

export default function TodoItem({ item }) {
  const { deleteTodo, editTodo } = useContext(TodoContext);

  return (
    <TodoItemArea>
      <span>{item.text}</span>
      <div>
        <button onClick={() => deleteTodo(item.id)}>
          <FaRegTrashAlt className="trash" size={18} color="#FF5C58" />
        </button>
        <button onClick={() => editTodo(item)}>
          <FaEdit size={18} color="#65C18C" />
        </button>
      </div>
    </TodoItemArea>
  )
}
