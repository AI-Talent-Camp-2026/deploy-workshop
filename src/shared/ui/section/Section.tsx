import type { ReactNode } from "react";
import { Box } from "@radix-ui/themes";

type Props = {
  id?: string;
  children: ReactNode;
};

export const Section = ({ id, children }: Props) => {
  return (
    <Box
      asChild
      id={id}
      py={{ initial: "4", sm: "5", md: "6", lg: "7" }}
      style={{ scrollMarginTop: "80px" }}
    >
      <section>{children}</section>
    </Box>
  );
};
