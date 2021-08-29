import React from "react";
import { Link } from "react-router-dom";
import { colors } from "src/constants/colors";
import styled from "styled-components";

const SNav = styled.nav`
  width: 450px;
`;

const SUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: ${colors.text};
`;

export const Nav = () => {
  return (
    <SNav>
      <SUl>
        <SLink to="expenses">Expenses</SLink>
        <SLink to="chat">Chat</SLink>
        <SLink to="esettings">Settings</SLink>
      </SUl>
    </SNav>
  );
};
