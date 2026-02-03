import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import {
  Card,
  Flex,
  Heading,
  Text,
  TextField,
  TextArea,
  Select,
  Checkbox,
} from "@radix-ui/themes";
import { FormField } from "../../../shared/ui/form-field/FormField";
import { CTAButton } from "../../../shared/ui/button/CTAButton";
import { Toast } from "../../../shared/ui/toast/Toast";
import { debounce } from "../../../shared/lib/debounce";
import { getJson, removeKey, setJson } from "../../../shared/lib/storage";
import type { ContactFormValues } from "../model/types";
import { CONTACT_DRAFT_KEY, emptyValues } from "../model/types";
import { simulateSend } from "../lib/sendContact";

export const ContactForm = () => {
  const [draft, setDraft] = useState<ContactFormValues>(() =>
    getJson<ContactFormValues>(CONTACT_DRAFT_KEY, emptyValues),
  );
  const [toastOpen, setToastOpen] = useState(false);
  const [toastDescription, setToastDescription] = useState<
    string | undefined
  >();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: draft,
    mode: "onBlur",
  });

  const mutation = useMutation({
    mutationFn: simulateSend,
    onSuccess: () => {
      setToastDescription("We'll get back to you as soon as possible.");
      setToastOpen(true);
      setDraft(emptyValues);
      reset(emptyValues);
      removeKey(CONTACT_DRAFT_KEY);
    },
  });

  const debouncedPersist = useMemo(
    () =>
      debounce((values: ContactFormValues) => {
        setDraft(values);
        const isEmpty =
          values.name === emptyValues.name &&
          values.email === emptyValues.email &&
          values.topic === emptyValues.topic &&
          values.message === emptyValues.message &&
          values.consent === emptyValues.consent;

        if (isEmpty) {
          removeKey(CONTACT_DRAFT_KEY);
        } else {
          setJson(CONTACT_DRAFT_KEY, values);
        }
      }, 400),
    [],
  );

  useEffect(() => {
    const subscription = watch((values) => {
      debouncedPersist(values as ContactFormValues);
    });
    return () => subscription.unsubscribe();
  }, [watch, debouncedPersist]);

  const onSubmit = (values: ContactFormValues) => {
    mutation.mutate(values);
  };

  const handleReset = () => {
    setDraft(emptyValues);
    reset(emptyValues);
    removeKey(CONTACT_DRAFT_KEY);
  };

  return (
    <>
      <Card
        size={{ initial: "2", sm: "3", md: "4" }}
        variant="surface"
        style={{ borderRadius: 24 }}
      >
        <Flex direction="column" gap={{ initial: "3", sm: "4" }}>
          <Heading size={{ initial: "3", sm: "4" }}>Contact us</Heading>
          <Text size={{ initial: "1", sm: "2" }} color="gray">
            Questions, partnerships, or support — drop a message and we'll
            follow up.
          </Text>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Flex direction="column" gap={{ initial: "2", sm: "3" }}>
              <FormField
                label="Name"
                htmlFor="name"
                description="Tell us what we should call you."
                errorMessage={errors.name?.message}
              >
                <TextField.Root
                  id="name"
                  placeholder="Alex"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Please enter at least 2 characters",
                    },
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
              </FormField>

              <FormField
                label="Email"
                htmlFor="email"
                description="We'll only use this to reply to your message."
                errorMessage={errors.email?.message}
              >
                <TextField.Root
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
              </FormField>

              <FormField
                label="Topic"
                htmlFor="topic"
                description="Help us route your message to the right person."
                errorMessage={errors.topic?.message}
              >
                <Controller
                  name="topic"
                  control={control}
                  rules={{ required: "Please select a topic" }}
                  render={({ field }) => (
                    <Select.Root
                      value={field.value || undefined}
                      onValueChange={field.onChange}
                    >
                      <Select.Trigger
                        id="topic"
                        aria-invalid={errors.topic ? "true" : "false"}
                        placeholder="Select a topic"
                      />
                      <Select.Content>
                        <Select.Item value="General">General</Select.Item>
                        <Select.Item value="Partnerships">
                          Partnerships
                        </Select.Item>
                        <Select.Item value="Support">Support</Select.Item>
                      </Select.Content>
                    </Select.Root>
                  )}
                />
              </FormField>

              <FormField
                label="Message"
                htmlFor="message"
                description="Share as much context as you'd like — the more detail, the better we can help."
                errorMessage={errors.message?.message}
              >
                <TextArea
                  id="message"
                  placeholder="Tell us a bit about your training or question..."
                  rows={4}
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 20,
                      message: "Please enter at least 20 characters",
                    },
                  })}
                  aria-invalid={errors.message ? "true" : "false"}
                />
              </FormField>

              <Flex gap="2" align="start">
                <Controller
                  name="consent"
                  control={control}
                  rules={{
                    validate: (value) =>
                      value || "You must agree to the processing of your data",
                  }}
                  render={({ field }) => (
                    <Checkbox
                      id="consent"
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(!!checked)}
                    />
                  )}
                />
                <Flex direction="column" gap="1">
                  <Text as="label" htmlFor="consent" size="2" weight="medium">
                    I agree to the processing of my data.
                  </Text>
                  <Text size="1" color="gray">
                    We'll never sell your data. We'll only use it to reply to
                    your message.
                  </Text>
                  {errors.consent && (
                    <Text size="1" color="red" role="alert" aria-live="polite">
                      {errors.consent.message}
                    </Text>
                  )}
                </Flex>
              </Flex>

              <Flex
                gap={{ initial: "2", sm: "3" }}
                justify="end"
                mt={{ initial: "2", sm: "3" }}
              >
                <CTAButton
                  type="button"
                  variant="secondary"
                  onClick={handleReset}
                  disabled={mutation.isPending}
                >
                  Reset
                </CTAButton>
                <CTAButton type="submit" disabled={mutation.isPending}>
                  {mutation.isPending ? "Sending…" : "Submit"}
                </CTAButton>
              </Flex>
            </Flex>
          </form>
        </Flex>
      </Card>

      <Toast
        open={toastOpen}
        onOpenChange={setToastOpen}
        title="Message sent"
        description={toastDescription}
      />
    </>
  );
};
