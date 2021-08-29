import React from "react";
import { colors } from "src/constants/colors";
import styled from "styled-components";

const SSidebar = styled.aside`
  width: 220px;
  height: 100%;
  background: ${colors.card};
`;

interface Props {
  chats?: string[];
}

export const Sidebar = ({ chats = ["test"] }: Props) => {
  return (
    <SSidebar>
      {chats.map((el) => (
        <h4>{el}</h4>
      ))}
    </SSidebar>
  );
};
