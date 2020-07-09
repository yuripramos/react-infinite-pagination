import React, { ReactNode } from "react";
import { RevenueProvider } from "./Revenue/index";

type Props = {
  children: ReactNode;
};

export default ({ children }: Props) => (
  <RevenueProvider>{children}</RevenueProvider>
);
