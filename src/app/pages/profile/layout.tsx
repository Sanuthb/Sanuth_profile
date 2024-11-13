import Navbar from "@/components/Home_comp/Navbar";
import Prof_navbar from "@/components/Profile_comp/Prof_navbar";
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
          <div className="md:sticky top-0 left-0 z-20">
            <Navbar />
          </div>
          <div className="w-full md:sticky top-0 left-0 md:z-10 ">
            <Prof_navbar />
          </div>
          {children}
        </>
      </body>
    </html>
  );
}
