import React from "react";
import styled from "styled-components";
import { InputField } from "./InputField";
import { IconType } from "react-icons";

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
interface loginPropsType {
  loginShowStatus: boolean;
  info: {
    title: string;
    blurb: string;
    inputs: inputType[];
  };
}

interface inputType {
  icon: IconType;
  text: string;
}

export const LoginSignupForm = ({ loginShowStatus, info }: loginPropsType) => {
  return (
    <SignupContainer>
      <Title>{info.title}</Title>
      <Blurb>{info.blurb}</Blurb>
      {info.inputs.map((input: inputType) => (
        <InputField key={input.text} input={input} />
      ))}
    </SignupContainer>
  );
};
