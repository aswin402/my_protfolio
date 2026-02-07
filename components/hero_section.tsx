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
          <article className="neon-card group">
            <div className="neon-card-inner">
        
              {/* IMAGE */}
              <Image
                src={profile}
                alt="profile"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
        
              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
              {/* HOVER INFO */}
              <div className="absolute inset-0 flex flex-col justify-end p-5
                              opacity-0 translate-y-4
                              transition-all duration-300
                              group-hover:opacity-100 group-hover:translate-y-0">
        
                <h3 className="text-lg font-semibold text-white">
                  Aswin Vishal
                </h3>
        
                <p className="text-sm text-white/80 mt-1">
                  Software Developer · ECE Student
                </p>
        
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                    React
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                    Next.js
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                    Flutter
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                    MERN
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                    PERN
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                    RESTAPI
                  </span>
                </div>
        
              </div>
        
            </div>
          </article>
        </div>






        
      </div>
    </div>
  );
}
