import styled from 'styled-components';

export const FooterArea = styled.footer`
  max-width: 1200px;
  margin: 0 auto;
  p {
    text-align: center;
    font-size: 12px;
    color: ${(props) => props.theme.text};
  }
`;
