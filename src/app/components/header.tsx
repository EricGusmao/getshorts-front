import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black p-5 text-white">
      <Link href="/" className="flex gap-5">
        <Image
          src="/logo.png"
          alt="TikService"
          width={64}
          height={64}
          className="inline cursor-pointer"
        />
        <h1 className="inline cursor-pointer gap-10 self-center text-3xl font-semibold">
          GetShorts
        </h1>
      </Link>
    </header>
  );
};

export default Header;
