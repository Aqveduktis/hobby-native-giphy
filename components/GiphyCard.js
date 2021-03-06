import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Image, View, Text } from "react-native";
import { Title } from '../App';

const GiphyCard = ({ selectedValue, giphy, setGiphy }) => {
  const [done, setDone] = useState(false);
  const animalURL = `https://api.giphy.com/v1/gifs/random?api_key=lByN5BPEwk9MR74phtPh0JpBBBBWyuVH&tag=${selectedValue}&rating=G`;

  useEffect(() => {
    fetch(animalURL)
      .then(res => res.json())
      .then(json => {
        setGiphy(json.data);
        setDone(true);
      });
  }, [animalURL, setGiphy, setDone]);

  console.log(giphy);

  return (
    <View>
      <Title>{done ? giphy.id : ""}</Title>
    </View>
  );
};
export default GiphyCard