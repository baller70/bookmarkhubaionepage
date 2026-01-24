import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { PostHogProvider, PostHogPageview } from "@/components/providers/PostHogProvider";

export const metadata: Metadata = {
  title: "Bookmark AI Hub - AI-Powered Bookmark Management",
  description: "Save, organize, and discover your bookmarks with AI. The future of bookmark management is here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PostHogProvider>
          <Suspense fallback={null}>
            <PostHogPageview />
          </Suspense>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
