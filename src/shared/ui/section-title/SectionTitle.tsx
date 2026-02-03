import { Heading, Text, Flex } from "@radix-ui/themes";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export const SectionTitle = ({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) => {
  const textAlign = align === "center" ? "center" : "left";

  return (
    <Flex
      direction="column"
      gap="2"
      mb="5"
      align={align === "center" ? "center" : "start"}
    >
      {eyebrow && (
        <Text
          size="2"
          color="jade"
          weight="medium"
          style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
        >
          {eyebrow}
        </Text>
      )}
      <Heading
        size={{ initial: "4", sm: "5", md: "6" }}
        align={textAlign}
        weight="bold"
      >
        {title}
      </Heading>
      {description && (
        <Text
          size={{ initial: "2", sm: "3" }}
          color="gray"
          align={textAlign}
          style={{ maxWidth: "100%" }}
          className="sm:max-w-[520px]"
        >
          {description}
        </Text>
      )}
    </Flex>
  );
};
