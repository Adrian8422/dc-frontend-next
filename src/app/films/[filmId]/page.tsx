"use client";

import { useParams } from "next/navigation";
import { PageWrapper } from "./styled";
import CardItemDetailFilm from "@/components/films/cardItemDetailFilm/cardItemDetailFilm";

export default function PageFilmId() {
  const params = useParams<{ filmId: string }>();

  return (
    <PageWrapper>
      <CardItemDetailFilm id={params.filmId as string} />
    </PageWrapper>
  );
}
