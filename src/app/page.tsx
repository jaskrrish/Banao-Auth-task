import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the <br /> Banao Auth Application
        </h1>
        <Link href="/signup" className="my-6 flex justify-center ">
          <Button variant={"outline"} className="cursor-pointer">
            Sign-up
          </Button>
        </Link>
      </div>
      <BackgroundBeams />
    </div>
  );
}
