import { Card, Flex, Text } from "@radix-ui/themes";

type Props = {
  open: boolean;
  title: string;
  description?: string;
  onOpenChange: (open: boolean) => void;
};

export const Toast = ({ open, title, description, onOpenChange }: Props) => {
  if (!open) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: 16,
        right: 16,
        left: "auto",
        zIndex: 50,
        maxWidth: 360,
      }}
    >
      <Card
        size="3"
        variant="surface"
        style={{
          boxShadow:
            "0 20px 25px -5px rgba(15, 23, 42, 0.4), 0 8px 10px -6px rgba(15, 23, 42, 0.3)",
        }}
      >
        <Flex direction="column" gap="1">
          <Text weight="medium">{title}</Text>
          {description && (
            <Text size="2" color="gray">
              {description}
            </Text>
          )}
          <button
            type="button"
            style={{
              marginTop: 8,
              textAlign: "right",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "12px",
              color: "var(--gray-11)",
            }}
            onClick={() => onOpenChange(false)}
          >
            Dismiss
          </button>
        </Flex>
      </Card>
    </div>
  );
};
