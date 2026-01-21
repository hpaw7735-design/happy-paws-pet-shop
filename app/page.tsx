"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const FeaturedProducts = dynamic(() => import("./FeaturedProducts"), {
  ssr: false,
  loading: () => (
    <section className="section-container py-xl md:py-2xl">
      <p className="text-center text-body">Loading featured products...</p>
    </section>
  ),
});

import Hero from "@/components/Hero";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Suspense fallback={<div />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}
