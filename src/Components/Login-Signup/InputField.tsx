import React, { FC, ReactElement, useState } from "react";
import styled from "styled-components";
import { IconType } from "react-icons";
import { JsxChild } from "typescript";

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
}

export const InputField: FC<propsType> = ({ input }) => {
  const [inputText, setInputText] = useState("");
  return (
    <Container>
      <Icon>
        <input.icon />
      </Icon>
      <Input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></Input>
    </Container>
  );
};
