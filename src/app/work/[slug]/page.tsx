import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getAllWorkSlugs, getWorkBySlug } from "@/lib/works";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: "Not a Patch" };
  return {
    title: `${work.title} · Not a Patch`,
    description: work.description,
  };
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <header className="border-border/60 border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm tracking-tight transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to index
          </Link>
          <span className="text-sm tracking-tight">Not a Patch</span>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-10 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)]">
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority
          />
        </div>

        <div className="flex flex-col justify-center gap-8">
          <div className="space-y-3">
            <p className="text-muted-foreground text-sm tracking-wide uppercase">
              {work.tagline}
            </p>
            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
              {work.title}
            </h1>
            <p className="text-muted-foreground max-w-md text-base leading-relaxed">
              {work.description}
            </p>
          </div>

          <ul className="text-foreground/90 space-y-2 text-sm">
            {work.details.map((line) => (
              <li
                key={line}
                className="border-border/50 flex items-center gap-2 border-b pb-2 last:border-0"
              >
                <span className="bg-foreground/80 size-1 shrink-0 rounded-full" />
                {line}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" className="gap-2">
              Add to cart
              <ArrowUpRight className="size-4" aria-hidden />
            </Button>
            <Link
              href="/"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Browse more work
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
