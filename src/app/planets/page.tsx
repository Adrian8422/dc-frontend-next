"use client";
import React from "react";
import { PageWrapper } from "./styled";
import { Title } from "../styled";
import PlanetsList from "@/components/planets/planetsList/planetsList";

const PlanetPage: React.FC = () => {
  return (
    <PageWrapper>
      <Title>Star Wars Planets</Title>
      <PlanetsList />
    </PageWrapper>
  );
};

export default PlanetPage;
