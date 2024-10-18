import React from "react";
import { useRouter } from "next/navigation";
import { Info, ItemContainer, Title } from "./styled";

interface FilmItemProps {
  film: {
    _id: string;
    title: string;
    director: string;
    release_date: string;
  };
}

const FilmItem: React.FC<FilmItemProps> = ({ film }) => {
  const router = useRouter(); 

  return (
    <ItemContainer onClick={() => router.push("/films/" + film._id)}>
      <Title>{film.title}</Title>
      <Info>Director: {film.director}</Info>
      <Info>Estreno: {film.release_date}</Info>
    </ItemContainer>
  );
};

export default FilmItem;
