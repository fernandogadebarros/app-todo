import styled from 'styled-components';

export const TodoFormArea = styled.div`
  .container {
    color: ${(props) => props.theme.background};
    background: transparent;
    margin-top: 60px;
    border-radius: 6px;
    form {
      display: flex;
      align-items: center;
      position: relative;
      > input {
        background: transparent;
        border-radius: 4px;
        padding: 12px;
        color: ${(props) => props.theme.textMain};
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
    }
    .message {
      color: #FF5C58;
      margin-top: 6px;
      font-size: 12px;
    }
  }
`;
