"use client";

import Slogan from "@/components/slogan";
import LinkBox from "@/components/linkbox";
import HowToUse from "@/components/how-to-use";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <Slogan />
      <LinkBox />
      <HowToUse />
      <Footer />
    </>
  );
}
