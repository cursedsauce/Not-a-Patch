import type { WorksWheelItem } from "@/components/ui/works-wheel";

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export type Work = {
  slug: string;
  title: string;
  image: string;
  tagline: string;
  description: string;
  details: string[];
};

export const WORKS: Work[] = [
  {
    slug: "prismatic-rift",
    title: "Prismatic Rift",
    image: unsplash("photo-1618005182384-a83a8bd57fbe"),
    tagline: "Light split across woven thread",
    description:
      "A limited-run embroidered patch that catches color like fractured glass. Built for jackets, bags, and anywhere you want a quiet burst of spectrum.",
    details: ["4.5″ woven patch", "Merrowed border", "Iron-on backing"],
  },
  {
    slug: "ember-clouds",
    title: "Ember Clouds",
    image: unsplash("photo-1506905925346-21bda4d32df4"),
    tagline: "Alpine glow, stitched in place",
    description:
      "Soft gradients and sharp peaks—this patch reads like a horizon at dusk. Dense thread count keeps the fade smooth up close.",
    details: ["3.5″ woven patch", "Heat-cut edge", "Sew-on recommended"],
  },
  {
    slug: "neon-portal",
    title: "Neon Portal",
    image: unsplash("photo-1451187580459-43490279c0fa"),
    tagline: "Doorway energy for everyday carry",
    description:
      "Electric blues and deep space blacks. A statement piece that still sits flat on technical shells and denim.",
    details: ["4″ woven patch", "Glow-thread accents", "Iron-on backing"],
  },
  {
    slug: "red-ribbon",
    title: "Red Ribbon",
    image: unsplash("photo-1557672172-298d0902470c"),
    tagline: "Typography as texture",
    description:
      "Ribbon forms spell motion without a single printed pixel—everything is thread direction and density.",
    details: ["3″ woven patch", "Matte finish", "Merrowed border"],
  },
  {
    slug: "celestial",
    title: "Celestial",
    image: unsplash("photo-1462331940025-496dfbfc7564"),
    tagline: "Nebula you can pin on",
    description:
      "Layered lavenders and gold metallics suggest depth without bulk. Pairs with black outerwear and neutral kits.",
    details: ["4.5″ woven patch", "Metallic thread", "Iron-on backing"],
  },
  {
    slug: "uplight",
    title: "Uplight",
    image: unsplash("photo-1518837695005-2083093ee35b"),
    tagline: "Portrait lighting, patch scale",
    description:
      "A single figure lit from below—minimal palette, maximum mood. For collectors who like restraint.",
    details: ["3.5″ woven patch", "High-contrast weave", "Sew-on recommended"],
  },
  {
    slug: "indigo-marble",
    title: "Indigo Marble",
    image: unsplash("photo-1550684848-fac1c5b4e853"),
    tagline: "Liquid stone in thread",
    description:
      "Swirls of indigo and cyan mimic poured ink. Each batch has slight variation—true small-batch character.",
    details: ["4″ woven patch", "Satin sheen thread", "Merrowed border"],
  },
  {
    slug: "launch-window",
    title: "Launch Window",
    image: unsplash("photo-1446776811953-b23d57bd21aa"),
    tagline: "Lift-off for your gear",
    description:
      "Clean vector rocket trail on a midnight field. Designed to read from across the room.",
    details: ["3″ woven patch", "Bold outline", "Iron-on backing"],
  },
  {
    slug: "cosmic-wave",
    title: "Cosmic Wave",
    image: unsplash("photo-1419242902214-272b3f66ee7a"),
    tagline: "Surf the quiet dark",
    description:
      "Astronaut and wave in one frame—playful, not loud. Finished with a tight merrow so it survives daily wear.",
    details: ["4.5″ woven patch", "Merrowed border", "Iron-on or sew-on"],
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return WORKS.find((work) => work.slug === slug);
}

export function getAllWorkSlugs(): string[] {
  return WORKS.map((work) => work.slug);
}

export function toWheelItems(works: Work[]): WorksWheelItem[] {
  return works.map((work) => ({
    title: work.title,
    image: work.image,
    href: `/work/${work.slug}`,
  }));
}
