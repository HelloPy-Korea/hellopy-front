import * as React from "react";
import { Container } from "@/components/Container";

export const AboutSection: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => {
  return (
    <Container className="flex flex-col items-center px-40 py-10" {...props}>
      <div className="flex w-full flex-col gap-10">{children}</div>
    </Container>
  );
};
