import { Badge } from "@/components/ui/badge";
import { Wand2Icon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="h-full max-w-7xl mx-auto pt-30 ">
      <h2 className="text-center font-bold text-purple-950 text-2xl mb-10">
        Features You Will Get
      </h2>
      <div className="flex flex-wrap gap-10">
        <Card className="relative mx-auto w-full max-w-sm pt-0">
          <div className="flex flex-col gap-2 p-4">
            <Badge variant="outline" className="text-purple-950 font-bold">
              <Wand2Icon /> Features
            </Badge>
            <span className="text-purple-950 text-sm font-bold">
              Visual Task Management (Kanban/List)
            </span>
          </div>
          <div className="absolute inset-0 z-30 aspect-video" />
          <Image
            src="/purple_sky.jpg"
            alt="Event cover"
            width={500}
            height={500}
            className="relative z-20 aspect-video w-full object-cover"
          />
          <CardHeader>
            <CardTitle className="text-purple-950 text-sm font-bold">
              See Everything, Monitor Everything.
            </CardTitle>
            <CardDescription>
              Stop guessing who&apos;s working on what. With interactive visual
              boards, you can see project status from &quot;Idea&quot; to
              &quot;Done&quot; at a glance. Move tasks around quickly with the
              drag-and-drop feature.
            </CardDescription>
          </CardHeader>
          <CardFooter className="text-purple-950">
            Total transparency for the entire team.
          </CardFooter>
        </Card>
        <Card className="relative mx-auto w-full max-w-sm pt-0">
          <div className="flex flex-col gap-2 p-4">
            <Badge variant="outline" className="text-purple-950 font-bold">
              <Wand2Icon /> Features
            </Badge>
            <span className="text-purple-950 text-sm font-bold">
              Real-time Collaboration & Chat
            </span>
          </div>
          <div className="absolute inset-0 z-30 aspect-video" />
          <Image
            src="/purple_sky.jpg"
            alt="Event cover"
            width={500}
            height={500}
            className="relative z-20 aspect-video w-full object-cover"
          />
          <CardHeader>
            <CardTitle className="text-purple-950 text-sm font-bold">
              Collaboration Without the Noisy &quot;Ping&quot;.
            </CardTitle>
            <CardDescription>
              Integrate discussions right within the task at hand. No more
              switching back and forth to WhatsApp or searching for attachments
              in a pile of emails. Provide feedback, attach documents, and get
              approvals all in one organized place.
            </CardDescription>
          </CardHeader>
          <CardFooter className="text-purple-950">
            Context is maintained, communication becomes more meaningful.
          </CardFooter>
        </Card>
        <Card className="relative mx-auto w-full max-w-sm pt-0">
          <div className="flex flex-col gap-2 p-4">
            <Badge variant="outline" className="text-purple-950 font-bold">
              <Wand2Icon /> Features
            </Badge>
            <span className="text-purple-950 text-sm font-bold">
              Timeline & Gantt Chart
            </span>
          </div>
          <div className="absolute inset-0 z-30 aspect-video" />
          <Image
            src="/purple_sky.jpg"
            alt="Event cover"
            width={500}
            height={500}
            className="relative z-20 aspect-video w-full object-cover"
          />
          <CardHeader>
            <CardTitle className="text-purple-950 text-sm font-bold">
              Deadlines Are No Longer a Threat, But a Plan.
            </CardTitle>
            <CardDescription>
              Map your project&apos;s journey chronologically. Identify
              potential obstacles before they arise and adjust your schedule
              flexibly. With Timeline, you have complete control over your time,
              not the other way around.
            </CardDescription>
          </CardHeader>
          <CardFooter className="text-purple-950">
            Predictability that makes your sleep better.
          </CardFooter>
        </Card>
        <Card className="relative mx-auto w-full max-w-sm pt-0">
          <div className="flex flex-col gap-2 p-4">
            <Badge variant="outline" className="text-purple-950 font-bold">
              <Wand2Icon /> Features
            </Badge>
            <span className="text-purple-950 text-sm font-bold">
              Smart Automation
            </span>
          </div>
          <div className="absolute inset-0 z-30 aspect-video" />
          <Image
            src="/purple_sky.jpg"
            alt="Event cover"
            width={500}
            height={500}
            className="relative z-20 aspect-video w-full object-cover"
          />
          <CardHeader>
            <CardTitle className="text-purple-950 text-sm font-bold">
              Let Our Robots Do the &quot;Rough Work&quot;.
            </CardTitle>
            <CardDescription>
              Tired of manually moving tasks or sending follow-up reminders? Set
              up our intelligent automation. When a task is complete, let the
              system notify the next person. Save your time for things that
              truly require human creativity.
            </CardDescription>
          </CardHeader>
          <CardFooter className="text-purple-950">
            Maximum efficiency without extra effort.
          </CardFooter>
        </Card>
        <Card className="relative mx-auto w-full max-w-sm pt-0">
          <div className="flex flex-col gap-2 p-4">
            <Badge variant="outline" className="text-purple-950 font-bold">
              <Wand2Icon /> Features
            </Badge>
            <span className="text-purple-950 text-sm font-bold">
              Analytics & Reporting
            </span>
          </div>
          <div className="absolute inset-0 z-30 aspect-video" />
          <Image
            src="/purple_sky.jpg"
            alt="Event cover"
            width={500}
            height={500}
            className="relative z-20 aspect-video w-full object-cover"
          />
          <CardHeader>
            <CardTitle className="text-purple-950 text-sm font-bold">
              Data-Based Decisions, Not Feelings.
            </CardTitle>
            <CardDescription>
              Get instant team performance reports. Who&apos;s most productive?
              Where are projects frequently stalled? Use real-time data to
              evaluate strategy and continually improve.
            </CardDescription>
          </CardHeader>
          <CardFooter className="text-purple-950">
            Objectivity in leading a team.
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
