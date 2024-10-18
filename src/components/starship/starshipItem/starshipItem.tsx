import React from "react";
import { useRouter } from "next/navigation";
import { Info, ItemContainer, Title } from "./styled";

interface StarshipItemProps {
  starship: {
    _id: string;
    name: string;
    model: string;
    crew: string;
  };
}

const StarshipItem: React.FC<StarshipItemProps> = ({ starship }) => {
  const navigateTo = useRouter();

  return (
    <ItemContainer
      onClick={() => navigateTo.push("/starships/" + starship._id)}
    >
      <Title>{starship.name}</Title>
      <Info>Modelo: {starship.model}</Info>
      <Info>Tripulacion: {starship.crew}</Info>
    </ItemContainer>
  );
};

export default StarshipItem;
