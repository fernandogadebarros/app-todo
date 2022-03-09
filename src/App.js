import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';

import { useState } from 'react';

// Components
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';

// Import Provider Context
import { TodoProvider } from './context/TodoContext';

export default function App() {
  const [theme, setTheme] = useState(true);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <TodoProvider>
          <GlobalStyle />
          <Header changeTheme={handleTheme} theme={theme} />
          <div className='main-container'>
            <TodoForm />
            <TodoList />
          </div>
          <Footer />
        </TodoProvider>
      </ThemeProvider>
    </>
  );
}
