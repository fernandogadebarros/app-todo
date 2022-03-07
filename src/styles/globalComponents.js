import styled from 'styled-components';

export const Button = styled.button`
  text-align: center;
  cursor: pointer;
  border-radius: ${(props) => props.round}px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
