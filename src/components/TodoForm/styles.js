import styled from 'styled-components';

export const TodoFormArea = styled.div`
  .container {
    color: ${(props) => props.theme.background};
    background: transparent;
    margin-top: 60px;
    border-radius: 6px;

    .message {
      color: #ff5c58;
      margin-top: 6px;
      font-size: 12px;
    }
  }
`;

export const FormTodo = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  > input {
    background: transparent;
    border-radius: 4px;
    padding: 12px;
    color: ${(props) => props.theme.textMain};
    border-color: ${(props) => props.theme.text};
  }
  > button {
    position: absolute;
    right: 12px;
    top: 32%;
    background: transparent;
    > svg {
      fill: ${(props) => props.theme.text};
    }
  }
`;
