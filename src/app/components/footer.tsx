import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background py-4 text-center">
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
}
