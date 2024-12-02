import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 flex w-full border-b border-border/40 bg-background/60 p-3 backdrop-blur dark:border-border">
      <Link href="/" className="mr-4 inline-flex items-center gap-2 lg:mr-6">
        <Image
          src="/logo.png"
          alt="TikService"
          width={64}
          height={64}
          className="inline cursor-pointer"
        />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          GetShorts
        </h1>
      </Link>
    </header>
  );
}
