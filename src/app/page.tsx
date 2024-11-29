"use client";

import Head from "@/components/Head";
import Slogan from "@/components/Slogan";
import LinkBox from '@/components/LinkBox';

export default function Home() {
  return (
    <div>
      <Head platform="Twitter"></Head>
      <Slogan/>
      <LinkBox/>
    </div>
  );
}