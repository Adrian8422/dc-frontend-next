"use client";
import React from "react";
import { PageWrapper } from "./styled";
import { Title } from "../styled";
import StarshipList from "@/components/starship/starshipList/starshipList";

const StarshipPage: React.FC = () => {
  return (
    <PageWrapper>
      <Title>Star Wars Starships</Title>
      <StarshipList />
    </PageWrapper>
  );
};

export default StarshipPage;
