import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogPost from "@/components/sections/BlogPost";

const SLUGS = [
  "near-miss-reporting-culture",
  "iso-45001-transition",
  "leading-indicators-safety",
  "cost-manual-incident-reporting",
  "contractor-safety-management",
  "lagging-to-leading-metrics",
];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Blog | EHSWatch`,
    description: `EHSWatch EHS insights and best practices — ${slug.replace(/-/g, " ")}.`,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <Navbar lightHero />
      <main>
        <BlogPost slug={slug} />
      </main>
      <Footer />
    </>
  );
}
