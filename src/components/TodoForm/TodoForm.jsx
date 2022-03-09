import { TodoFormArea, FormTodo } from './styles';
import { useState, useContext, useEffect } from 'react';

import { FaPlus } from 'react-icons/fa';

import TodoContext from '../../context/TodoContext';

export default function TodoForm() {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const { addTodo, todoEdit, updateTodo } = useContext(TodoContext);

  useEffect(() => {
    if (todoEdit.edit === true) {
      setText(todoEdit.item.text);
    }
  }, [todoEdit]);

  const handleTextChange = (e) => {
    if (text === '') {
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 3) {
      setMessage(
        'Para inserir uma tarefa, é necessário incluir mais de 3 caracteres.'
      );
    } else {
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 3) {
      const newTodo = { text };
      if (todoEdit.edit === true) {
        updateTodo(todoEdit.item.id, newTodo);
      } else {
        addTodo(newTodo);
      }
      setText('');
    }
  };

  return (
    <TodoFormArea>
      <div className='container'>
        <FormTodo onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Insira sua tarefa...'
            onChange={handleTextChange}
            value={text}
          />
          <button>
            <FaPlus />
          </button>
        </FormTodo>
        {message && <div className='message'>{message}</div>}
      </div>
    </TodoFormArea>
  );
}
