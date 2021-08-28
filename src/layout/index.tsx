import React, { ReactNode } from "react";
import { Navigation } from "src/modules/navigation/index";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
