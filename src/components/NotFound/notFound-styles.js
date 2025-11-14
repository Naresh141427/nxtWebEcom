import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  padding: 1rem;
  text-align: center;
`;

export const NotFoundImage = styled.img`
  width: 300px;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const NotFoundDescitption = styled.h1`
  font-size: 1.3rem;
  font-weight: 600;
  color: #475569;
  margin-top: 1rem;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const HomeButton = styled.button`
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background-color: #0b69ff;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;
