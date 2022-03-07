import styled from 'styled-components';

export const TodoListArea = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  p {
    color: ${props => props.theme.textMain};
    text-align: center;
    font-size: 12px;
  }
`;
