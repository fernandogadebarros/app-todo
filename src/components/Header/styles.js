import styled from 'styled-components';

export const HeaderArea = styled.header`
  height: 70px;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.header};
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    .title {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 1px;
    }
    button {
      font-size: 10px;
      letter-spacing: 1px;
    }
  }
`;
