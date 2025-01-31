import * as React from "react";

export const LogoBanner: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-col">{children}</div>;
};
