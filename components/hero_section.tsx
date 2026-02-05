import { Button } from "@/components/ui/button";
import Image from "next/image";
import profile from "@/public/profile.jpeg"

export default function Hero_section() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto grid w-full max-w-(--breakpoint-xl) gap-12 px-6 py-12 lg:grid-cols-2">
        <div>
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
        
        
        <div className="flex w-full items-center justify-center">
          <div className="flex h-90 w90 items-center justify-center rounded-xl border border-border bg-accent">
            <Image
              src={profile}
              alt="profile"
              width={300}
              height={300}
              className="h-90 w-90 rounded-xl object-cover"
              priority
            />
          </div>
        </div>

        
      </div>
    </div>
  );
}
