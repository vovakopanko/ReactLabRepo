import styled from "styled-components";

export const AmountValue = styled.span`
  color: white;
  font-size: 21px;
  min-width: 25px;
  width: auto;
`;

export const AmountBlock = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftIcon = styled.div`
  padding-right: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const RightIcon = styled.div`
  padding-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;
