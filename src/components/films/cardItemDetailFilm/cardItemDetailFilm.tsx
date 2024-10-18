import { useGetFilmById } from "@/lib/hooks/filmhooks";
import { CardContainer, Info, Title, Image, Description } from "./styled";
import { useEffect, useState } from "react";

const CardItemDetailFilm: React.FC<{ id: string }> = ({ id }) => {
  const { data, error, isLoading } = useGetFilmById(id);
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
      <Image src={data?.image || "/placeholder.png"} alt={data?.name} />
      <Description isVisible={isVisible}>
        <Title>{data?.title}</Title>
        <Info>Director: {data?.director}</Info>
        <Info>Estreno: {data?.release_date}</Info>
        <Info>Episodio: {data?.episode_id}</Info>
        <Info>Productores: {data?.producer}</Info>
      </Description>
    </CardContainer>
  );
};

export default CardItemDetailFilm;
