"use client";
import Link from "next/link";
import {
  Container,
  NavItem,
  NavList,
  Subtitle,
  Title,
  SearchLink,
  OrText,
} from "./styled";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/search");
  };

  return (
    <Container>
      <Title>Welcome to the Star Wars Explorer</Title>
      <Subtitle>Select an entity to explore:</Subtitle>
      <NavList>
        <NavItem>
          <Link href="/people">People</Link>
        </NavItem>
        <NavItem>
          <Link href="/films">Films</Link>
        </NavItem>
        <NavItem>
          <Link href="/starships">Starships</Link>
        </NavItem>
        <NavItem>
          <Link href="/planets">Planets</Link>
        </NavItem>
      </NavList>
      <OrText>OR</OrText>
      <SearchLink onClick={handleRedirect}>Search</SearchLink>
    </Container>
  );
}
