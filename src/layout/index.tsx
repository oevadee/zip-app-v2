import React, { ReactNode } from "react";
import { useLocation } from "react-location";
import { Footer } from "src/modules/footer";
import { Navigation } from "src/modules/navigation/index";
import { Sidebar } from "src/modules/sidebar";
import styled from "styled-components";

const SWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: solid 1px red;
`;

const SMain = styled.main`
  flex: 1;
`;

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const location = useLocation();
  console.log(location);

  return (
    <SWrapper>
      <Navigation />
      {/* {current.pathname === "/app" && <Sidebar />} */}
      <SMain>{children}</SMain>
      <Footer />
    </SWrapper>
  );
};
