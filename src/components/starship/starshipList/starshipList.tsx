import React from "react";
import { useGetAllStarships } from "@/lib/hooks/starshiphooks";
import StarshipItem from "../starshipItem/starshipItem";
import { ListContainer } from "./styled";

interface Starship {
  _id: string;
  name: string;
  model: string;
  crew: string;
}

const StarshipList: React.FC = () => {
  const { data, error, isLoading } = useGetAllStarships();

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos: {error.message}</p>;

  return (
    <ListContainer>
      {data?.map((starship: Starship) => (
        <StarshipItem key={starship._id} starship={starship} />
      ))}
    </ListContainer>
  );
};

export default StarshipList;
