import React from "react";
import { Link } from "react-location";
import styled from "styled-components";

const SHeader = styled.header`
  height: 80px;
  padding: 10px;
  border-bottom: 1px solid white;
`;

const SLogo = styled.img`
  height: 100%;
`;

export const Navigation = () => {
  return (
    <SHeader>
      <Link to="/">
        <SLogo src="/src/images/logo.jpg" alt="Zip app logo" />
      </Link>
    </SHeader>
  );
};
