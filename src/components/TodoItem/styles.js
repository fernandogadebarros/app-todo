import styled from 'styled-components';

export const TodoItemArea = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd40;
  padding-bottom: 12px;
  margin-bottom: 12px;
  > div {
    display: flex;
    gap: 10px;
  }
  button {
    background: transparent;
  }
`;
