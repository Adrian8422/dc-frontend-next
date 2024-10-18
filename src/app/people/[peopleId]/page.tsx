"use client";

import { useParams } from "next/navigation";
import { PageWrapper } from "./styled";
import CardItemDetail from "@/components/charecters/cardItemDetail/cardItemDetail";

export default function PagePeopleId() {
  const params = useParams<{ peopleId: string }>();

  return (
    <PageWrapper>
      <CardItemDetail id={params.peopleId as string} />
    </PageWrapper>
  );
}
