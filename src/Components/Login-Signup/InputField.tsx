import { FC, useState } from "react";
import styled from "styled-components";
import { IconType } from "react-icons";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  border: lime 1px solid;
  display: flex;
`;
const Icon = styled.div``;
const Input = styled.input``;

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
