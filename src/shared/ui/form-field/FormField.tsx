import type { ReactNode } from "react";
import { Flex, Text } from "@radix-ui/themes";

type Props = {
  label: string;
  htmlFor: string;
  description?: string;
  errorMessage?: string;
  children: ReactNode;
};

export const FormField = ({
  label,
  htmlFor,
  description,
  errorMessage,
  children,
}: Props) => {
  const descriptionId = description ? `${htmlFor}-description` : undefined;
  const errorId = errorMessage ? `${htmlFor}-error` : undefined;

  return (
    <Flex direction="column" gap="2">
      <Text as="label" htmlFor={htmlFor} size="2" weight="medium">
        {label}
      </Text>
      {description && (
        <Text id={descriptionId} size="1" color="gray">
          {description}
        </Text>
      )}
      {children}
      {errorMessage && (
        <Text id={errorId} size="1" color="red" role="alert" aria-live="polite">
          {errorMessage}
        </Text>
      )}
    </Flex>
  );
};
