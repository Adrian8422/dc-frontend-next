"use client";

import { useParams } from "next/navigation";
import { PageWrapper } from "./styled";
import CardItemDetailPlanets from "@/components/planets/cardItemDetailPlanets/cardItemDetailPlanets";

export default function ExampleClientComponent() {
  const params = useParams<{ planetId: string }>();

  return (
    <PageWrapper>
      <CardItemDetailPlanets id={params.planetId as string} />
    </PageWrapper>
  );
}
