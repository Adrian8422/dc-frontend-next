import React from "react";
import { useRouter } from "next/navigation";
import { ItemContainer, Title, Info } from "./styled";

interface CharacterItemProps {
  character: {
    _id: string;
    name: string;
    height: string;
    mass: string;
  };
}

const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
  const router = useRouter();

  return (
    <ItemContainer onClick={() => router.push("/people/" + character._id)}>
      <Title>{character.name}</Title>
      <Info>Height: {character.height}</Info>
      <Info>Mass: {character.mass}</Info>
    </ItemContainer>
  );
};

export default CharacterItem;
