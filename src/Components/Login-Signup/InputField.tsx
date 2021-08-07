import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  border: lime 1px solid;
`;
const Icon = styled.div``;
const Input = styled.input``;

export const InputField: React.FC = () => {
  return (
    <Container>
      <Icon></Icon>
      <Input></Input>
    </Container>
  );
};
