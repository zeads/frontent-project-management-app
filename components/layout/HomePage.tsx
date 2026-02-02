import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
// import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <section className="h-screen bg-[url('/purple_sky.jpg')] bg-cover bg-center -mt-15">
      {/* <Navbar /> */}
      <div className="flex flex-col items-center justify-center pt-40 lg:pt-50">
        <h1 className="text-7xl text-purple-950 max-w-6xl text-center mb-8 leading-tight">
          Manage Projects as Easily as Making a Shopping List.
        </h1>
        <p className="lg:max-w-1/3 text-center mb-10 text-purple-950">
          Finally, a project management tool that doesn&apos;t take weeks to
          learn. Simply drag and drop, and let your team work happier.
        </p>
        <div className="flex gap-2">
          <Button className=" bg-purple-950 text-white border border-purple-950 hover:bg-white hover:text-purple-950">
            Get Started <ArrowRight />
          </Button>
          <Button className="hover:bg-purple-950 hover:text-white border border-purple-950 bg-white text-purple-950">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
