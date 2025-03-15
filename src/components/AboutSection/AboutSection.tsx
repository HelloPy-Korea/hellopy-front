import * as React from "react";
import { Container } from "@/components/Container";

export const AboutSection: React.FC<
  React.PropsWithChildren<{ type?: number; style?: React.CSSProperties }>
> = ({ type = 1, children, ...props }) => {
  return type === 2 ? (
    <Container
      className="flex items-center bg-cover bg-center px-16 py-16"
      {...props}
    >
      <div className="flex w-full flex-col justify-between gap-10 md:flex-row">
        {children}
      </div>
    </Container>
  ) : (
    <Container className="flex flex-col items-center px-40 py-10" {...props}>
      <div className="flex w-full flex-col gap-10">{children}</div>
    </Container>
  );
};
