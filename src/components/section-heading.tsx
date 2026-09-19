interface SectionHeadingProps {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ id, title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-2xl text-center flex flex-col items-center ${className}`}>
      <div className="inline-flex items-center justify-center gap-3 sm:gap-4 max-w-full">
        <div className="h-[1px] w-8 sm:w-16 md:w-24 shrink-0 bg-gradient-to-l from-blue-500 via-blue-400 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.5)] animate-thread-glow" />
        <h2
          id={id}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          {title}
        </h2>
        <div className="h-[1px] w-8 sm:w-16 md:w-24 shrink-0 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.5)] animate-thread-glow" />
      </div>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
