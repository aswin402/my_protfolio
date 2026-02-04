import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero_section() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto grid w-full max-w-(--breakpoint-xl) gap-12 px-6 py-12 lg:grid-cols-2">
        <div>
          <Badge
            asChild
            className="rounded-full border-border py-1"
            variant="secondary"
          >
            <Link href="#">
              Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          <h1 className="mt-6 max-w-[17ch] font-semibold text-4xl leading-[1.2]! tracking-[-0.035em] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
            Hey, I’m Aswin
          </h1>
          <p className="mt-6 max-w-[60ch] text-foreground/80 sm:text-lg">
            An ECE student and aspiring software developer passionate about building real-world web and mobile applications.
            I work with MERN , PERN , Next.js, Flutter, and modern UI tools to turn ideas into working products.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button className="rounded-full text-base" size="lg">
              Download CV
            </Button>
            <Button
              className="rounded-full text-base shadow-none"
              size="lg"
              variant="outline"
            >
               see experiences
            </Button>
          </div>
        </div>
        <div className="aspect-video w-full rounded-xl bg-accent" />
      </div>
    </div>
  );
}
