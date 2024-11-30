"use client";

import Head from "@/components/Head";
import Slogan from "@/components/Slogan";
import LinkBox from '@/components/LinkBox';
import HowToUse from '@/components/HowToUse';
import Footer from './_components/Footer';

export default function Home() {
  return (
    <div>
      <Head />
      <Slogan />
      <LinkBox/>
      <HowToUse />
      <Footer />
    </div>
  );
}