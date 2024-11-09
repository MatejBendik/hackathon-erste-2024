import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {

  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center">
        <div className="my-10">
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            Want to know your future?{" "}
            <div className="relative mx-auto w-max">
              <span className="whitespace-nowrap bg-gradient-to-r tracking-normal from-purple-500 to-blue-500 inline-block text-transparent bg-clip-text">
                Your AI will tell you
              </span>
            </div>
          </h2>
        </div>
        <div>
          <Button asChild size="lg">
            <Link href={{
              pathname: "/avatar",
              query: { mode: "create" }
            }}>
              Create Your Avatar
            </Link>
          </Button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
