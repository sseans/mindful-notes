import styled from "styled-components";
import { FaStickyNote } from "react-icons/fa";

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginCard = styled.div`
  width: 400px;
  height: 500px;
  max-width: 85%;
  max-height: 60%;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  color: white;
`;

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <LoginCard>
        <FaStickyNote />
        Mindful Notes
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
