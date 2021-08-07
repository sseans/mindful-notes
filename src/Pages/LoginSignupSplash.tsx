import { useState } from "react";
import styled from "styled-components";
import { LoginSignupForm } from "../Components/Login-Signup/LoginSignupForm";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 400px;
  height: 500px;
  max-width: 85%;
  max-height: 60%;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(218, 226, 241, 0.637);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  color: #333131;
`;

const LoginSignupSplash: React.FC = () => {
  const [loginSignupStatus, setLoginSignupStatus] = useState("signup");
  return (
    <Container>
      <Card>
        <LoginSignupForm loginSignupStatus={loginSignupStatus} />
      </Card>
    </Container>
  );
};

export default LoginSignupSplash;
