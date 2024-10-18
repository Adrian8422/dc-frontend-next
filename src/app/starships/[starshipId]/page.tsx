"use client";

import { useParams } from "next/navigation";
import { PageWrapper } from "./styled";
import CardItemDetailStarship from "@/components/starship/cardItemDetailStarship/cardItemDetailStarship";

export default function ExampleClientComponent() {
  const params = useParams<{ starshipId: string }>();

  return (
    <PageWrapper>
      <CardItemDetailStarship id={params.starshipId as string} />
    </PageWrapper>
  );
}
