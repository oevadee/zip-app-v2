import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "src/modules/footer";
import { Navigation } from "src/modules/navigation/index";
import { Sidebar } from "src/modules/sidebar";
import styled from "styled-components";
import { PATHS } from "../routes/paths";

const SWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SMainWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const SMain = styled.main`
  flex: 1;
  padding: 10px;
`;

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const { pathname } = useLocation();

  return (
    <SWrapper>
      <Navigation />
      <SMainWrapper>
        {pathname === PATHS.CHAT && <Sidebar />}
        <SMain>{children}</SMain>
      </SMainWrapper>
      <Footer />
    </SWrapper>
  );
};
