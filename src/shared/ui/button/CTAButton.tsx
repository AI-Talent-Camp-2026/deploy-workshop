import { Button } from "@radix-ui/themes";
import type { ButtonProps } from "@radix-ui/themes";
import type { ReactNode } from "react";

type CTAButtonVariant = "primary" | "secondary";

type Props = {
  variant?: CTAButtonVariant;
  children: ReactNode;
} & Omit<ButtonProps, "variant">;

export const CTAButton = ({
  variant = "primary",
  children,
  ...buttonProps
}: Props) => {
  const radixVariant: ButtonProps["variant"] =
    variant === "primary" ? "solid" : "outline";

  return (
    <Button
      size="3"
      radius="full"
      highContrast
      variant={radixVariant}
      color="jade"
      {...buttonProps}
    >
      {children}
    </Button>
  );
};
