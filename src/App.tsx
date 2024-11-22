import { RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import { router } from "./routes/Router";

const GlobalStyle = createGlobalStyle`
  
body {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  letter-spacing: -0.2px;
}

body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }

a{
 color: inherit;
 transition: color 0.2s ease-in-out;
 display: block;
}

a:hover{
  color: ${(props) => props.theme.accentColor};
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
