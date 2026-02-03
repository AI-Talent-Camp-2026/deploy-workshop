import { Flex, Link, Separator, Text } from "@radix-ui/themes";

export const Footer = () => {
  return (
    <footer>
      <Separator size="4" />
      <Flex
        px={{ initial: "3", xs: "4", sm: "5" }}
        py={{ initial: "3", sm: "4" }}
        direction={{ initial: "column", sm: "row" }}
        align={{ initial: "start", sm: "center" }}
        justify="between"
        gap={{ initial: "2", sm: "3" }}
      >
        <Text size="2" color="gray">
          © {new Date().getFullYear()} PulseTrack. All rights reserved.
        </Text>
        <Flex gap="3" wrap="wrap">
          <Link href="#" size="2" color="gray">
            Privacy
          </Link>
          <Link href="#" size="2" color="gray">
            Terms
          </Link>
          <Link href="#" size="2" color="gray">
            Instagram · Coming soon
          </Link>
          <Link href="#" size="2" color="gray">
            App Store · Coming soon
          </Link>
        </Flex>
      </Flex>
    </footer>
  );
};
