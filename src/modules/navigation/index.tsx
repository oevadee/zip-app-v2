import React from "react";
import { Link } from "react-router-dom";
import { colors } from "src/constants/colors";
import styled from "styled-components";
import { Nav } from "./components/nav";

const SHeader = styled.header`
  height: 80px;
  padding: 10px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.card};
`;

const SLogo = styled.img`
  height: 60px;
`;

export const Navigation = () => {
  return (
    <SHeader>
      <Link to="/">
        <SLogo src="/src/images/logo.jpg" alt="Zip app logo" />
      </Link>
      <Nav />
    </SHeader>
  );
};
