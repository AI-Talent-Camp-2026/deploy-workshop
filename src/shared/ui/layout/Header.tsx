import { Flex, Heading, Link } from "@radix-ui/themes";
import { NavLink } from "../nav-link/NavLink";

export const Header = () => {
  return (
    <header>
      <Flex
        align="center"
        justify="between"
        px={{ initial: "3", xs: "4", sm: "5" }}
        py={{ initial: "2", sm: "3" }}
        style={{ borderBottom: "1px solid rgba(148, 163, 184, 0.3)" }}
      >
        <Link href="/" underline="none">
          <Heading
            size={{ initial: "3", sm: "4" }}
            weight="bold"
            style={{ whiteSpace: "nowrap" }}
          >
            PulseTrack
          </Heading>
        </Link>
        <Flex
          asChild
          gap={{ initial: "2", sm: "3" }}
          align="center"
          wrap="wrap"
        >
          <nav aria-label="Main navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </nav>
        </Flex>
      </Flex>
    </header>
  );
};
