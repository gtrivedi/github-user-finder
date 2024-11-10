import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "GitHub User Finder -  An Application to find the GitHub User Projects, Followers, Repositories & Profile Details",
  description: "A Next JS Application to find the GitHub User Details like Projects, Followers, Repositories & Profile Details ..etc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
