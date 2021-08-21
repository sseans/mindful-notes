import { FC, useState } from "react";
import styled from "styled-components";
import { IconType } from "react-icons";

const Container = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 8px;
  margin: 20px 0;
  border: #ffffffb3 1px solid;
  display: flex;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  min-width: 70px;
  color: #ffffffb3;
`;
const Input = styled.input`
  width: 100%;
  margin-right: 70px;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  font-size: 1.2rem;
  color: #333131;
`;

// Types
interface propsType {
  input: {
    icon: IconType;
    text: string;
  };
  formDetails: object;
  setFormDetails: Function;
}

export const InputField: FC<propsType> = ({
  input,
  formDetails,
  setFormDetails,
}) => {
  const [inputText, setInputText] = useState("");
  return (
    <Container>
      <Icon>
        <input.icon />
      </Icon>
      <Input
        type={input.text === "password" ? "password" : "text"}
        required
        placeholder={input.text}
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          setFormDetails({ ...formDetails, [input.text]: e.target.value });
        }}
      ></Input>
    </Container>
  );
};
