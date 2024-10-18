import { useGetPeopleById } from "@/lib/hooks/peoplehooks";
import { CardContainer, Info, Title, Image, Description } from "./styled";
import { useEffect, useState } from "react";


interface Person {
  _id: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  image?: string; 
}

const CardItemDetail: React.FC<{ id: string }> = ({ id }) => {
  const { data, error, isLoading } = useGetPeopleById(id);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (data) {
      setIsVisible(true);
    }
  }, [data]);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos: {error.message}</p>;

  const person = data as Person;

  return (
    <CardContainer isVisible={isVisible}>
      <Image src={person?.image || "/placeholder.png"} alt={person?.name} />
      <Description isVisible={isVisible}>
        <Title>{person?.name}</Title>
        <Info>Height: {person?.height}</Info>
        <Info>Mass: {person?.mass}</Info>
        <Info>Hair Color: {person?.hair_color}</Info>
        <Info>Skin Color: {person?.skin_color}</Info>
        <Info>Eye Color: {person?.eye_color}</Info>
        <Info>Birth Year: {person?.birth_year}</Info>
        <Info>Gender: {person?.gender}</Info>
      </Description>
    </CardContainer>
  );
};

export default CardItemDetail;
