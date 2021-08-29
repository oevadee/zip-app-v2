import React from "react";
import { colors } from "src/constants/colors";
import styled from "styled-components";

const SFooter = styled.footer`
  height: 120px;
  background: ${colors.card};
`;

export const Footer = () => {
  return <SFooter></SFooter>;
};
