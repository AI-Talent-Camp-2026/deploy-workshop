import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import type { ReactNode } from "react";

type Props = {
  icon?: ReactNode;
  title: string;
  description: string;
};

export const FeatureCard = ({ icon, title, description }: Props) => {
  return (
    <Card size="3" variant="surface" style={{ height: "100%" }}>
      <Flex direction="column" gap="2">
        {icon && (
          <Flex
            align="center"
            justify="center"
            style={{
              width: 40,
              height: 40,
              borderRadius: "999px",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
            }}
          >
            {icon}
          </Flex>
        )}
        <Heading size="3">{title}</Heading>
        <Text size="2" color="gray">
          {description}
        </Text>
      </Flex>
    </Card>
  );
};
