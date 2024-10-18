import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
  padding: 0 10px;

  @media (max-width: 480px) {
    padding: 0 15px;
  }

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  padding: 8px;
  border-radius: 30px;
  background-color: #1c1c1e;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  input {
    flex: 1;
    border: none;
    border-radius: 30px;
    background-color: transparent;
    color: #e0e0e0;
    font-size: 1rem;
    padding: 12px 16px;
    outline: none;
    transition: background-color 0.3s, color 0.3s;

    &::placeholder {
      color: #6e6e73;
      font-style: italic;
    }

    &:focus {
      background-color: #2c2c2e;
      color: #fff;
    }

    @media (max-width: 480px) {
      padding: 10px 12px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    padding: 8px;
    cursor: pointer;
    color: #fff;
    transition: transform 0.2s, opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      transform: scale(0.95);
    }

    svg {
      width: 24px;
      height: 24px;

      @media (max-width: 480px) {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 20px 0;

  button {
    padding: 12px 18px;
    border: 2px solid transparent;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s, transform 0.2s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      border-color: #33ffa3;
      transform: scale(1.05);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }
  }

  span {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const ResultItem = styled.div`
  background-color: #1e1e2f;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 1.5rem;
  color: #ffcc00;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 5px;
  }
`;

export const Info = styled.p`
  margin: 5px 0;
  color: #ccc;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
