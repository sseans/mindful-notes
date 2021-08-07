import { useState, useEffect } from "react";
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

const FooterText = styled.div``;
const FooterButton = styled.button``;

const LoginSignupSplash: React.FC = () => {
  const [loginShowStatus, setLoginShowStatus] = useState(false);

  return (
    <Container>
      <Card>
        <LoginSignupForm loginShowStatus={loginShowStatus} />
        <FooterText>
          {loginShowStatus
            ? "Dont have an account?"
            : "Already have an account?"}
          <FooterButton onClick={() => setLoginShowStatus(!loginShowStatus)}>
            {loginShowStatus ? "Sign Up" : "Sign In"}
          </FooterButton>
        </FooterText>
      </Card>
    </Container>
  );
};

export default LoginSignupSplash;
