"use client";
import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: radial-gradient(circle at top, #0f0f10, #000000);
  color: #c7c7c7;
  text-align: center;
  padding: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 4px #00eaff, 0 0 25px #00eaff;
  font-family: "Star Jedi", sans-serif;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #a0a0a0;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 2rem;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.2), transparent);
    filter: blur(8px);
    z-index: -1;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const NavItem = styled.li`
  font-size: 1.5rem;

  a {
    text-decoration: none;
    color: #00eaff;
    transition: color 0.4s, text-shadow 0.4s;
    text-shadow: 0 0 10px transparent;

    &:hover {
      color: #ffffff;
      text-shadow: 0 0 15px #00eaff;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const OrText = styled.p`
  margin: 20px 0;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 40px;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
  }

  &::before {
    left: -50px;
  }

  &::after {
    right: -50px;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    &::before,
    &::after {
      width: 30px;
    }
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    &::before,
    &::after {
      width: 20px;
    }
  }
`;

export const SearchLink = styled.span`
  font-size: 1.5rem;
  color: #33ffa3;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.4s, transform 0.3s;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #33ffa3;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;
  }

  &:hover {
    color: #ffffff;
    transform: translateY(-2px);

    &::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Header = styled.header`
  width: 100%;
  padding: 15px;
  background: #0d1117;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #00eaff;
  text-decoration: none;
  margin-left: 20px;
  transition: color 0.3s, text-shadow 0.3s;

  svg {
    transition: transform 0.3s;
  }

  &:hover {
    color: #ffffff;
    text-shadow: 0 0 8px #ffcc00;

    svg {
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
