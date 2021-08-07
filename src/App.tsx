import React from "react";
import styled from "styled-components";
import LoginSignupSplash from "./Pages/LoginSignupSplash";

const AppContainer = styled.h1`
  font-size: 3rem;
  height: 100vh;
  background-color: #5dc88b;
  background-image: radial-gradient(
      at 47% 33%,
      hsl(162, 77%, 40%) 0,
      transparent 59%
    ),
    radial-gradient(at 82% 65%, hsl(221.41, 71%, 81%) 0, transparent 55%);
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <LoginSignupSplash />
    </AppContainer>
  );
};

export default App;
