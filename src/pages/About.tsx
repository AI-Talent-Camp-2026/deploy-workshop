import { Flex, Grid, Text } from "@radix-ui/themes";
import { Section } from "../shared/ui/section/Section";
import { SectionTitle } from "../shared/ui/section-title/SectionTitle";
import { ContactForm } from "../features/contact-form/ui/ContactForm";

export const AboutPage = () => {
  return (
    <>
      <Section>
        <Grid
          columns={{ initial: "1", md: "2" }}
          gap={{ initial: "4", sm: "5", md: "6" }}
          align="start"
        >
          <Flex direction="column" gap="3">
            <SectionTitle
              eyebrow="About"
              title="Built by lifters who hate messy logs"
              align="left"
              description="PulseTrack started as a simple spreadsheet to keep heavy training honest. Today it's a focused tool for athletes and coaches who want signal, not dashboards."
            />
            <Text size={{ initial: "2", sm: "3" }} color="gray">
              We believe the best training app is the one you actually use on
              your toughest sets. That's why every interaction in PulseTrack is
              designed to be fast under fatigue and clear when you review.
            </Text>
            <Text size={{ initial: "2", sm: "3" }} color="gray">
              Whether you're chasing a total, a first pull-up, or just trying to
              stay consistent around a busy life, PulseTrack helps you see the
              work that's really moving you forward.
            </Text>
          </Flex>
          <ContactForm />
        </Grid>
      </Section>
    </>
  );
};
