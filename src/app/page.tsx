"use client";
import { useContext } from "react";
import { AppContext } from "@/context";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

export default function Home() {
  const context = useContext(AppContext);
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 z-20">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the <br /> Banao Auth Application
        </h1>
        <div className="my-6 flex justify-center">
          {context.username ? (
            <div className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md">
              welcome {context.username}
            </div>
          ) : (
            <Link
              href="/signup"
              className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md"
            >
              Signup
            </Link>
          )}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
