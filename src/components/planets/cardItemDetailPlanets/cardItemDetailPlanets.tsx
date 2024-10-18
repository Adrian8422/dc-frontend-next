import { CardContainer, Info, Title, Image, Description } from "./styled";
import { useEffect, useState } from "react";
import { useGetPlanetById } from "@/lib/hooks/planethooks";

interface Planet {
  _id: string;
  name: string;
  terrain: string;
  climate: string;
  gravity: string;
  diameter: string;
  orbital_period: string;
  rotation_period: string;
  surface_water: string;
  image?: string;
}

const CardItemDetailPlanets: React.FC<{ id: string }> = ({ id }) => {
  const { data, error, isLoading } = useGetPlanetById(id);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (data) {
      setIsVisible(true);
    }
  }, [data]);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos: {error.message}</p>;

  const planet = data as Planet;

  return (
    <CardContainer isVisible={isVisible}>
      <Image src={planet?.image || "/placeholder.png"} alt={planet?.name} />
      <Description isVisible={isVisible}>
        <Title>{planet?.name}</Title>
        <Info>Terreno: {planet?.terrain}</Info>
        <Info>Clima: {planet?.climate}</Info>
        <Info>Gravedad: {planet?.gravity}</Info>
        <Info>Diámetro: {planet?.diameter}</Info>
        <Info>Periodo Orbitral: {planet?.orbital_period}</Info>
        <Info>Periodo rotación: {planet?.rotation_period}</Info>
        <Info>Superficie de agua: {planet?.surface_water}</Info>
      </Description>
    </CardContainer>
  );
};

export default CardItemDetailPlanets;
