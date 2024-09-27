import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import Link from "next/link";

export function Team() {
  const features = [
    {
      name: "Retsepile Shao",
      title: "Founder / CEO-Software Engineer",
      description: (
        <Link href={'https://github.com/ragmer09toske'}>
          <Container className="h-12 w-12 circle-2">
            <Github className="h-6 w-6 dark:text-white" />
          </Container>
        </Link>
      ),
      icon: <img alt="" src='/people/1.png' className="h-16 w-16 rounded-full" />,
    },
    {
      name: "Kamohelo Khosana",
      title: "COO-Economist",
      description: "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <img alt="" src='/people/4.png' className="h-16 w-16 rounded-full" />,
    },
    {
      name: "Tankiso Fuma",
      title: "Senior Software Engineer",
      description: (
        <Link href={'https://github.com/your-senior-engineer'}>
          <Container className="h-12 w-12 circle-2">
            <Github className="h-6 w-6 dark:text-white" />
          </Container>
        </Link>
      ),
      icon: <img alt="" src='/people/2.png' className="h-16 w-16 rounded-full" />,
    },
    {
      name: "Batloung Masoabi",
      title: "Senior Software Engineer",
      description: (
        <Link href={'https://github.com/another-senior-engineer'}>
          <Container className="h-12 w-12 circle-2">
            <Github className="h-6 w-6 dark:text-white" />
          </Container>
        </Link>
      ),
      icon: <img alt="" src='/people/5.png' className="h-16 w-16 rounded-full" />,
    },
    {
      name: "Lemohang Makintane",
      title: "Senior Software Engineer",
      description: (
        <Link href={'https://github.com/another-senior-engineer'}>
          <Container className="h-12 w-12 circle-2">
            <Github className="h-6 w-6 dark:text-white" />
          </Container>
        </Link>
      ),
      icon: <img alt="" src='/people/6.png' className="h-16 w-16 rounded-full" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
      <div className="absolute top-36 w-full h-full flex justify-center items-center pl-10">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Meet the team
        </div>
      </div>
    </div>
  );
}

const Feature = ({
  name,
  title,
  description,
  icon,
  index,
}: {
  name: string;
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block">
          {name}
        </span>
        <div className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-indigo-600">
          {title}
        </div>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`,
        className
      )}
    >
      {children}
    </div>
  );
};
