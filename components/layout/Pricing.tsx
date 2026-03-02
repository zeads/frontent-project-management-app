import { PriceCard } from "../ui/price-card";

export default function Pricing() {
  const whatIncludedBasic = [
    "Basic Task Management",
    "Team Colaboration",
    "Basic Reporting",
    "Real-Time Activity Feed",
    "Mobile Access",
    "Email Support",
  ];

  const whatIncludedPro = [
    "Time Tracking",
    "Advanced Reporting",
    "Priority Levels",
    "Subtasks & Checklists",
    "Productivity Analiytics",
    "Billble Hours",
  ];

  const whatIncludedEnterprise = [
    "Custom Integrations",
    "Customizable Dashboard",
    "Unlimited Projects",
    "Milestone Monitoring",
    "Priority Support",
    "Onboarding Assistance",
  ];

  return (
    <div id="pricing" className="h-screen flex flex-col gap-5 pt-30">
      {/* <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Pricing
        </h1>
        <p className="mt-2 text-lg text-slate-700">
          Choose the plan that&apos;s right for you.
        </p>
      </div> */}
      <div className="flex gap-5 items-center justify-center">
        <PriceCard
          forTitle="For Individuals"
          title="Basic"
          description="Perfect for Small teams and individuals just starting out with project
          management."
          price="$10"
          whatIncluded={whatIncludedBasic}
        />
        <PriceCard
          forTitle="For Startups"
          title="Pro"
          description="Perfect for Growing teams that need advanced features to boost productivity."
          price="$25"
          whatIncluded={whatIncludedPro}
          mostPopular={true}
        />
        <PriceCard
          forTitle="For Big Companies"
          title="Enterprise"
          description="Perfect for Large teams and enterprises with complex project management needs."
          price="$50"
          whatIncluded={whatIncludedEnterprise}
        />
      </div>
    </div>
  );
}
