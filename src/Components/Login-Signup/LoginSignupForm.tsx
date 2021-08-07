import React from "react";
import styled from "styled-components";
import { InputField } from "./InputField";

// Styles
const SignupContainer = styled.form`
  height: fit-content;
  width: 100%;
  border: red 1px solid;
`;
const Title = styled.h1`
  font-size: 2rem;
`;
const Blurb = styled.h2`
  font-size: 1.1rem;
`;

// Types
interface LoginPropsType {
  loginShowStatus: boolean;
  info: {
    title: string;
    blurb: string;
  };
}

export const LoginSignupForm = ({ loginShowStatus, info }: LoginPropsType) => {
  return (
    <SignupContainer>
      <Title>Create your account</Title>
      <Blurb>Created for developers by developers</Blurb>
      <InputField />
    </SignupContainer>
  );
};
