import styled from "styled-components";

export const BlockItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 1368px) {
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
