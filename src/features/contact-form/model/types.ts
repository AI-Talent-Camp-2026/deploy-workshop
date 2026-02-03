export type ContactFormValues = {
  name: string;
  email: string;
  topic: string;
  message: string;
  consent: boolean;
};

export const CONTACT_DRAFT_KEY = "contactDraft";

export const emptyValues: ContactFormValues = {
  name: "",
  email: "",
  topic: "",
  message: "",
  consent: false,
};
