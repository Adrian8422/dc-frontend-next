import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardContainer = styled.div<{ isVisible: boolean }>`
  display: flex;
  background-color: #1e1e2f;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px auto;
  max-width: ${({ isVisible }) => (isVisible ? "800px" : "320px")};
  transition: max-width 0.5s ease-in-out, box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    margin: 10px;
  }
`;

export const Image = styled.img`
  width: 320px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
  object-fit: cover;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

export const Description = styled.div<{ isVisible: boolean }>`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #f0f0f0;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 0.7s ease;
  transition: opacity 0.7s ease;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h3`
  margin: 10px 0;
  font-size: 1.8rem;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Info = styled.p`
  margin: 5px 0;
  background: rgba(255, 255, 255, 0.1);
  color: #f0f0f0;
  font-size: 0.95rem;
  line-height: 1.6;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 8px;
  }
`;
