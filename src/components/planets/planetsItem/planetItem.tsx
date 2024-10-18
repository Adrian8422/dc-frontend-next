import React from 'react';
import { useRouter } from 'next/navigation';
import { ItemContainer, Title, Info } from './styled';

interface PlanetItemProps {
  planet: {
    _id: string;
    name: string;
    terrain: string;
    gravity: string;
  };
}

const PlanetItem: React.FC<PlanetItemProps> = ({ planet }) => {
  const navigateTo = useRouter();

  return (
    <ItemContainer onClick={() => navigateTo.push('/planets/' + planet._id)}>
      <Title>{planet.name}</Title>
      <Info>Terreno: {planet.terrain}</Info>
      <Info>Gravedad: {planet.gravity}</Info>
    </ItemContainer>
  );
};

export default PlanetItem;
