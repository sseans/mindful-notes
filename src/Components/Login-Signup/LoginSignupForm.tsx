import styled from "styled-components";
import { InputField } from "./InputField";
import { useState } from "react";
import { FC } from "react";
import { inputType, propInfoType } from "../../Pages/LoginSignupSplash";

// Styles
const SignupContainer = styled.form`
  height: fit-content;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;
const Blurb = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;
const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 12px;
  background-color: #fff;
  cursor: pointer;
`;

// Types
interface loginPropsType {
  info: propInfoType;
  submitFunction: Function;
}

export const LoginSignupForm: FC<loginPropsType> = ({
  info,
  submitFunction,
}) => {
  const [formDetails, setFormDetails] = useState({});

  return (
    <SignupContainer
      onSubmit={(e) => {
        e.preventDefault();
        submitFunction(info.title, formDetails);
      }}
    >
      <Title>{info.title}</Title>
      <Blurb>{info.blurb}</Blurb>
      {info.inputs.map((input: inputType) => (
        <InputField
          key={input.text}
          input={input}
          formDetails={formDetails}
          setFormDetails={setFormDetails}
        />
      ))}
      <SubmitButton>{info.buttonText}</SubmitButton>
    </SignupContainer>
  );
};
