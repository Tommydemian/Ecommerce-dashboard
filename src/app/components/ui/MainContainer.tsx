import React from "react";

type MainContainerProps = {
  children: React.ReactNode;
};

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};
