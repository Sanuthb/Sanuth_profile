import Navbar from "@/components/Home_comp/Navbar";
import Amazon_bottombar from "@/components/Works_comp/Amazon_bottombar";
import Amazon_navbar from "@/components/Works_comp/Amazon_navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanuth Bibin B | linkedin ",
  description: "This is my profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <>
          <Navbar />
          <Amazon_navbar />
          <Amazon_bottombar />
          {children}
        </>
      </body>
    </html>
  );
}
