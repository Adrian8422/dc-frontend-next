import styled from "styled-components";

export const ItemContainer = styled.div`
  background-color: #1e1e2f;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  padding: 20px;
  margin: 15px 0;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  }
`;

export const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 1.8rem;
  color: #ffcc00;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Info = styled.p`
  margin: 5px 0;
  color: #ccc;
  font-size: 1rem;
`;
