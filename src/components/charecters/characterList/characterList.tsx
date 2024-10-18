import React from "react";
import CharacterItem from "../characterItem/characterItem";
import { useGetAllPeople } from "@/lib/hooks/peoplehooks";
import { ListContainer } from "./styled";

type Character = {
  _id: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};

const CharacterList: React.FC = () => {
  const { data, error, isLoading } = useGetAllPeople();

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos: {error.message}</p>;

  return (
    <ListContainer>
      {data?.map((character: Character) => (
        <CharacterItem key={character._id} character={character} />
      ))}
    </ListContainer>
  );
};

export default CharacterList;
