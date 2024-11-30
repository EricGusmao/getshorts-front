import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-[#111111] py-4 text-center text-white">
      <p>&copy; {new Date().getFullYear()} GetShorts. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-5">
        <span className="inline">
          <Link href="/terms">Terms of Service</Link>
        </span>
        <span className="inline">
          <Link href="/">Contact</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
