import { ArrowRight } from "lucide-react";
import { ShineBorder } from "/src/components/ui/shine-border";

import { cn } from "@/lib/utils";

export function InteractiveHoverButton({ children, className, ...props }) {
  return (
    <button
      className={cn(
        "group bg-background relative w-full cursor-pointer overflow-hidden rounded-full p-2 px-6 text-center font-semibold",
        className
      )}
      {...props}
    >
      <ShineBorder
        shineColor={["#7928CA", "#daaa63", "#e29a3f", "#FE8BBB"]}
        borderWidth={2}
      />
      <div className='flex items-center gap-2 justify-center'>
        <div className='bg-primary h-2 w-2 rounded-full transition-all duration-200 group-hover:scale-[150.8] animated-bg'></div>
        <span className='inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0'>
          {children}
        </span>
      </div>
      <div className='text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100'>
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
}
