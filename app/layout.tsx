"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

const inter = Inter({ subsets: ["latin"] });
const value = process.env.NEXT_PUBLIC_CONVEX_URL as string;
const convex = new ConvexReactClient(value);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey="pk_test_c3VwZXItY3JhYi04LmNsZXJrLmFjY291bnRzLmRldiQ">
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>

        <html lang="en">
          <body>{children}</body>
        </html>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
