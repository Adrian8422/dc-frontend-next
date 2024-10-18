import { useGetStarshipById } from "@/lib/hooks/starshiphooks";
import { CardContainer, Info, Title, Image, Description } from "./styled";
import { useEffect, useState } from "react";

const CardItemDetailStarship: React.FC<{ id: string }> = ({ id }) => {
  const { data, error, isLoading } = useGetStarshipById(id);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (data) {
      setIsVisible(true);
    }
  }, [data]);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos: {error.message}</p>;

  return (
    <CardContainer isVisible={isVisible}>
      <Image
        src={data?.image || "../../../public/media/big-placeholder.jpg"}
        alt={data?.name}
      />
      <Description isVisible={isVisible}>
        <Title>{data?.name}</Title>
        <Info>Modelo: {data?.model}</Info>
        <Info>Vel.máxima: {data?.max_atmosphering_speed}</Info>
        <Info>Pasajeros: {data?.passengers}</Info>
        <Info>Coste: {data?.cost_in_credits}</Info>
        <Info>Tripulación: {data?.crew}</Info>
        <Info>Consumibles: {data?.consumables}</Info>
      </Description>
    </CardContainer>
  );
};

export default CardItemDetailStarship;
