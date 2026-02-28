import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";

type TPriceCardProps = {
  forTitle: string;
  title: string;
  description: string;
  price: string;
  whatIncluded: string[];
  mostPopular?: boolean;
};

export function PriceCard({
  title,
  forTitle,
  description,
  price,
  whatIncluded,
  mostPopular,
}: TPriceCardProps) {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardDescription className="flex justify-between items-center">
          {forTitle}
          {mostPopular && (
            <span className="text-xs font-semibold text-purple-950">
              Most Popular
            </span>
          )}
        </CardDescription>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="font-semibold text-2xl mb-3">
          {price}
          <span className="font-normal text-sm"> /month</span>
        </h2>
        <div>
          <h3 className="font-semibold ">What&apos;s included</h3>
          <ul>
            {whatIncluded.map((item, i) => (
              <li key={i} className="flex gap-2 items-center">
                <CircleCheckBig size={16} /> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          className={`w-full ${
            mostPopular
              ? "bg-purple-950 text-white border border-purple-950 hover:bg-white hover:text-purple-950"
              : "bg-white text-purple-950 border border-purple-950 hover:bg-purple-950 hover:text-white"
          }`}
        >
          Contact Sales
        </Button>
      </CardFooter>
    </Card>
  );
}
