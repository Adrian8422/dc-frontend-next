"use client";

import React from "react";
import { Title } from "../styled";
import { PageWrapper } from "./styled";
import SearchList from "@/components/search/SearchList";

const SearchPage: React.FC = () => {
  return (
    <PageWrapper>
      <Title>Star Wars Search</Title>
      <SearchList />
    </PageWrapper>
  );
};

export default SearchPage;
