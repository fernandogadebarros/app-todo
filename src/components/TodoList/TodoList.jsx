import { TodoListArea } from './styles';
import { useContext } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import TodoContext from '../../context/TodoContext';

export default function TodoList() {
  const { todo } = useContext(TodoContext);

  if (!todo || todo.length === 0) {
    return (
      <TodoListArea>
        <p>Não há tarefas :(</p>
      </TodoListArea>
    );
  }

  return (
    <TodoListArea>
      {todo.map((item) => (
        <div key={item.id}>
          <TodoItem item={item} />
        </div>
      ))}
    </TodoListArea>
  );
}
