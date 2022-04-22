import styled from "styled-components";
import { colors } from "./../../../../styles/palette/index";
export const SettingInfoBlock = styled.div`
  display: flex;
  align-items: "center";
  flex-direction: "row";
  border-bottom: 1px solid ${colors.BLACK};
  &:last-child{
    border-bottom: none };
  }
`;

export const SettingLabel = styled.p`
  width: 50%;
  color: ${colors.GRAY};
  font-size: 18px;
  padding-left: 5px;
`;

export const SettingText = styled.span`
  text-align: right;
  word-wrap: break-word;
  align-self: center;
  width: 50%;
  color: ${colors.BLACK};
  font-size: 20px;
`;
