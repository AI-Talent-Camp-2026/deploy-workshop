import { Flex, Grid, Card, Heading, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import {
  LightningBoltIcon,
  BarChartIcon,
  TimerIcon,
  MixIcon,
  ActivityLogIcon,
} from "@radix-ui/react-icons";
import { CTAButton } from "../shared/ui/button/CTAButton";
import { Section } from "../shared/ui/section/Section";
import { SectionTitle } from "../shared/ui/section-title/SectionTitle";
import { FeatureCard } from "../shared/ui/feature-card/FeatureCard";
import { StepCard } from "../shared/ui/step-card/StepCard";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FinalCTASection />
    </>
  );
};

const HeroSection = () => {
  return (
    <Section id="hero">
      <Grid
        columns={{ initial: "1", md: "2" }}
        gap={{ initial: "4", sm: "5", md: "6" }}
        align="center"
      >
        <Flex direction="column" gap={{ initial: "3", sm: "4" }}>
          <Heading size={{ initial: "5", sm: "6", md: "7", lg: "8" }}>
            Track. Train. Progress — in real time.
          </Heading>
          <Text size={{ initial: "2", sm: "3" }} color="gray">
            PulseTrack helps you log workouts in seconds, surface meaningful
            trends, and stay accountable to the plan that actually moves the
            needle.
          </Text>
          <Flex gap={{ initial: "2", sm: "3" }} wrap="wrap">
            <CTAButton asChild>
              <Link to="/about" style={{ textDecoration: "none" }}>
                Start Tracking
              </Link>
            </CTAButton>
            <CTAButton
              variant="secondary"
              onClick={() => {
                const element = document.getElementById("features");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See Demo
            </CTAButton>
          </Flex>
          <Flex gap={{ initial: "3", sm: "4" }} wrap="wrap">
            <Text size={{ initial: "1", sm: "2" }} color="gray">
              <strong>10s</strong> to log a workout
            </Text>
            <Text size={{ initial: "1", sm: "2" }} color="gray">
              <strong>Real-time</strong> progress insights
            </Text>
          </Flex>
        </Flex>
        <Card
          size={{ initial: "2", sm: "3", md: "4" }}
          variant="classic"
          style={{
            borderRadius: 24,
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <Flex direction="column" gap={{ initial: "3", sm: "4" }}>
            <Heading size={{ initial: "2", sm: "3" }}>
              Today&apos;s Session
            </Heading>
            <Grid
              columns={{ initial: "1", xs: "2" }}
              gap={{ initial: "2", sm: "3" }}
            >
              <Stat label="Total volume" value="12,450 kg" />
              <Stat label="Sessions this week" value="4 / 4" />
              <Stat label="Best set" value="180 kg x 3" />
              <Stat label="Readiness" value="Green" />
            </Grid>
            <Text size={{ initial: "1", sm: "2" }} color="gray">
              See PRs, trends, and recovery signals update as you train — not
              tomorrow.
            </Text>
          </Flex>
        </Card>
      </Grid>
    </Section>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <Flex direction="column" gap="1">
    <Text size="1" color="gray">
      {label}
    </Text>
    <Text size="3" weight="medium">
      {value}
    </Text>
  </Flex>
);

const HighlightsSection = () => {
  return (
    <Section id="highlights">
      <SectionTitle
        eyebrow="Why PulseTrack"
        title="Built for people who actually train"
        description="Everything in PulseTrack is optimized for speed under fatigue and clarity when you review what really worked."
        align="left"
      />
      <Grid
        columns={{ initial: "1", sm: "2" }}
        gap={{ initial: "3", sm: "4" }}
      >
        <FeatureCard
          icon={<LightningBoltIcon />}
          title="Workout Log That Takes 10 Seconds"
          description="Start a template, tweak the sets that changed, and log. No scrolling for days or typing novels between sets."
        />
        <FeatureCard
          icon={<BarChartIcon />}
          title="Insights You’ll Actually Use"
          description="PR timelines, volume trends, and readiness signals that make it painfully obvious when it’s time to push or pull back."
        />
      </Grid>
    </Section>
  );
};

const FeaturesSection = () => {
  return (
    <Section id="features">
      <SectionTitle
        eyebrow="Features"
        title="Everything you need to see progress clearly"
      />
      <Grid columns={{ initial: "1", sm: "2", lg: "3" }} gap="4">
        <FeatureCard
          icon={<TimerIcon />}
          title="Smart Workout Templates"
          description="Save and reuse the sessions that work. Auto-fill loads, reps, and rest so you can start training faster."
        />
        <FeatureCard
          icon={<ActivityLogIcon />}
          title="Progress & PR Tracking"
          description="Automatic PR detection and lift history so you always know the numbers you’re chasing."
        />
        <FeatureCard
          icon={<MixIcon />}
          title="Habit & Goal System"
          description="Weekly targets, streaks, and goal check-ins that reward consistency, not just max days."
        />
        <FeatureCard
          icon={<LightningBoltIcon />}
          title="Recovery & Readiness Signals"
          description="Track sleep, soreness, and RPE to see how recovery impacts the quality of your sessions."
        />
        <FeatureCard
          icon={<ActivityLogIcon />}
          title="Nutrition Notes"
          description="Attach quick notes on fueling so you can connect your best sessions to what you actually ate."
        />
        <FeatureCard
          icon={<BarChartIcon />}
          title="Shareable Reports / Coach Mode"
          description="Generate clean progress snapshots you can send to a coach or keep for your own reviews."
        />
      </Grid>
    </Section>
  );
};

const HowItWorksSection = () => {
  return (
    <Section id="how-it-works">
      <SectionTitle
        eyebrow="How it works"
        title="Three steps to training with more signal and less noise"
      />
      <Grid columns={{ initial: "1", md: "3" }} gap="4">
        <StepCard
          step={1}
          title="Create Your Plan"
          description="Set your split, main lifts, and weekly targets. Build templates that match how you already like to train."
        />
        <StepCard
          step={2}
          title="Log Workouts & Metrics"
          description="Track sets, reps, load, RPE, and readiness in seconds so the data stays honest — even when you’re gassed."
        />
        <StepCard
          step={3}
          title="Review Trends & Adjust"
          description="Use progress charts and PR timelines to tweak volume, intensity, and recovery instead of guessing."
        />
      </Grid>
    </Section>
  );
};

const FinalCTASection = () => {
  return (
    <Section id="final-cta">
      <Card
        size={{ initial: "2", sm: "3", md: "4" }}
        variant="classic"
        style={{
          textAlign: "center",
          borderRadius: 24,
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        <Flex
          direction="column"
          align="center"
          gap={{ initial: "3", sm: "4" }}
        >
          <Heading size={{ initial: "3", sm: "4", md: "5" }}>
            Consistency wins. We help you see it.
          </Heading>
          <Text
            size={{ initial: "2", sm: "3" }}
            color="gray"
            style={{ maxWidth: "100%" }}
            className="sm:max-w-[520px]"
          >
            PulseTrack turns a scattered training log into a clear story of your
            progress — so you can keep stacking the weeks that actually move you
            forward.
          </Text>
          <Flex
            gap={{ initial: "2", sm: "3" }}
            wrap="wrap"
            justify="center"
          >
            <CTAButton asChild>
              <Link to="/about" style={{ textDecoration: "none" }}>
                Create Free Account
              </Link>
            </CTAButton>
            <CTAButton
              variant="secondary"
              onClick={() => {
                const element = document.getElementById("hero");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Download App
            </CTAButton>
          </Flex>
        </Flex>
      </Card>
    </Section>
  );
};
