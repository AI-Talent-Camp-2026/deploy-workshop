import { Card, Flex, Heading, Text } from "@radix-ui/themes";

type Props = {
  step: number;
  title: string;
  description: string;
};

export const StepCard = ({ step, title, description }: Props) => {
  return (
    <Card size="3" variant="surface" style={{ height: "100%" }}>
      <Flex direction="column" gap="2">
        <Text
          size="2"
          color="jade"
          weight="medium"
          style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
        >
          Step {step}
        </Text>
        <Heading size="3">{title}</Heading>
        <Text size="2" color="gray">
          {description}
        </Text>
      </Flex>
    </Card>
  );
};
