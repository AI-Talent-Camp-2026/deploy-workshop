import type { ContactFormValues } from "../model/types";

export const simulateSend = async (values: ContactFormValues) => {
  // Simulate latency; here we just wait and echo the payload.
  await new Promise((resolve) => setTimeout(resolve, 800));
  return values;
};
