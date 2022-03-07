import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

/*
font-family: 'League Spartan', sans-serif;
font-family: 'Outfit', sans-serif;
font-family: 'Urbanist', sans-serif;
*/

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
} 

img {
  display: block;
  max-width: 100%;
}

button {
  cursor: pointer;
  border: none;
}

input, 
select,
textarea {
  padding: 10px 16px;
  border: 1px solid #ddd;
  width: 100%;
}

body {
  font-size: 16px;
  font-family: 'Outfit', sans-serif;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: .3s;
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.main-container {
  height: calc(100vh - 180px);
}

`;
