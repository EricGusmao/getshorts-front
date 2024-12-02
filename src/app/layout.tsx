import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "GetShorts - Download Short Videos",
  description: "Download short videos from Twitter, TikTok, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            {children}
            <Footer />
          </div>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
