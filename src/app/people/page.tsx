"use client";
import CharacterList from "@/components/charecters/characterList/characterList";
import React from "react";
import { PageWrapper } from "./styled";
import { Title } from "../styled";

const PeoplePage: React.FC = () => {
  return (
    <PageWrapper>
      <Title>Star Wars Characters</Title>
      <CharacterList />
    </PageWrapper>
  );
};

export default PeoplePage;
