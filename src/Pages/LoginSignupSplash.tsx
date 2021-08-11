import { FC, useState } from "react";
import styled from "styled-components";
import { LoginSignupForm } from "../Components/Login-Signup/LoginSignupForm";
import { GoPerson } from "react-icons/go";
import { IoMail } from "react-icons/io5";
import { MdVpnKey } from "react-icons/md";
import { IconType } from "react-icons";

// Styles
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
const FooterText = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
`;
const FooterButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;

// Types
export type inputType = {
  icon: IconType;
  text: string;
};

export interface propInfoType {
  title: string;
  blurb: string;
  inputs: inputType[];
  buttonText: string;
}

// Variables
const loginInfo: propInfoType = {
  title: "Log in to your account",
  blurb: "Get back up to speed with your notes!",
  inputs: [
    { icon: IoMail, text: "email" },
    { icon: MdVpnKey, text: "password" },
  ],
  buttonText: "Log into my account",
};

const signupInfo: propInfoType = {
  title: "Create your account",
  blurb: "Start making some notes now!",
  inputs: [
    { icon: GoPerson, text: "username" },
    { icon: IoMail, text: "email" },
    { icon: MdVpnKey, text: "password" },
  ],
  buttonText: "Create my account",
};

const LoginSignupSplash: FC = () => {
  const [loginShowStatus, setLoginShowStatus] = useState(false);

  function login(message: string, formDetails: {}) {
    console.log(message, formDetails);
  }

  function signup(message: string, formDetails: {}): void {
    console.log(message, formDetails);
  }

  return (
    <Container>
      <Card>
        <LoginSignupForm
          info={loginShowStatus ? loginInfo : signupInfo}
          submitFunction={loginShowStatus ? login : signup}
        />
        <FooterText>
          {loginShowStatus
            ? "Dont have an account? "
            : "Already have an account? "}
          <FooterButton onClick={() => setLoginShowStatus(!loginShowStatus)}>
            {loginShowStatus ? "Sign Up" : "Sign In"}
          </FooterButton>
        </FooterText>
      </Card>
    </Container>
  );
};

export default LoginSignupSplash;
