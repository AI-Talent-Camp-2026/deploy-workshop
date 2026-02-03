import type { ReactNode } from "react";
import { Box, Container, Flex } from "@radix-ui/themes";
import { Header } from "./Header";
import { Footer } from "./Footer";

type AppShellProps = {
  children: ReactNode;
};

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background:
          "radial-gradient(circle at top, rgba(16, 185, 129, 0.12), transparent 55%), #050816",
      }}
    >
      <Header />
      <Flex asChild direction="column" flexGrow="1" justify="center">
        <main style={{ width: "100%" }}>
          <Container
            size={{ initial: "1", sm: "2", md: "3", lg: "4" }}
            px={{ initial: "3", xs: "4", sm: "5", md: "6" }}
            py={{ initial: "4", sm: "5", md: "6" }}
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            {children}
          </Container>
        </main>
      </Flex>
      <Footer />
    </Box>
  );
};
