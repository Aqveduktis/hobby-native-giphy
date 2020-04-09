import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components/native";
import GiphyChoice from "./components/GiphyChoice";
import GiphyCard from "./components/GiphyCard";
// const api_key = "lByN5BPEwk9MR74phtPh0JpBBBBWyuVH";

export const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
  text-align: center;
`;

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: space-around;
`;

const App =() => {
  const [selectedValue, setSelectedValue] = useState();
  const [giphy, setGiphy] = useState();
  return (
    <Container>
      <Title> Make someone happy</Title>
      <Title>by sharing a Giphy!</Title>
      <GiphyChoice
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <Title>{selectedValue} hej </Title>

      {selectedValue !== undefined && (
        <GiphyCard
          selectedValue={selectedValue}
          giphy={giphy}
          setGiphy={setGiphy}
        />
      )}
    </Container>
  );
}
export default App