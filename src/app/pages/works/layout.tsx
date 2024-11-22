import Navbar from "@/components/Home_comp/Navbar";
import Amazon_bottombar from "@/components/Works_comp/Amazon_bottombar";
import Amazon_navbar from "@/components/Works_comp/Amazon_navbar";
import Mobile_nav from "@/components/Works_comp/Mobile_nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanuth Bibin B | Amazon ",
  description: "This is my works",
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
          <div className="hidden md:block">
            <Amazon_navbar />
            <Amazon_bottombar />
          </div>
          <Mobile_nav />
          {children}
        </>
      </body>
    </html>
  );
}
