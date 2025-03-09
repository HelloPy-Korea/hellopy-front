import * as React from "react";
import { Container } from "@/components/Container";

export const AboutSection: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => {
  return (
    <Container
      className="flex flex-col items-center px-[156px] py-16"
      {...props}
    >
      <div className="flex w-full flex-col gap-10 px-[160px]">{children}</div>
    </Container>
  );
};
