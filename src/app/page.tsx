"use client";

import Head from "@/components/head";
import Slogan from "@/components/slogan";
import LinkBox from "@/components/linkbox";
import HowToUse from "@/components/how-to-use";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Head />
      <Slogan />
      <LinkBox />
      <HowToUse />
      <Footer />
    </div>
  );
}
