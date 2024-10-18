import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #0d1117;
  color: #f0f6fc;
  padding: 100px;

  @media (max-width: 768px) {
    padding: 75px 15px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: #58a6ff;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
