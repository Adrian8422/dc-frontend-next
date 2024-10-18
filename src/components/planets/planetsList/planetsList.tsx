import React from 'react';
import PlanetItem from '../planetsItem/planetItem';
import { useGetAllPlanets } from '@/lib/hooks/planethooks';
import { ListContainer } from './styled';

interface Planet {
  _id: string;
  name: string;
  terrain: string;
  gravity: string;
}

const PlanetsList: React.FC = () => {
  const { data, error, isLoading } = useGetAllPlanets();

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos: {error.message}</p>;

  return (
    <ListContainer>
      {data?.map((planet: Planet) => (
        <PlanetItem key={planet._id} planet={planet} />
      ))}
    </ListContainer>
  );
};

export default PlanetsList;
