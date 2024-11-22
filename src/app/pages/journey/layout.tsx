import Navbar from "@/components/Home_comp/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanuth Bibin B | Agoda ",
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
          {children}
        </>
      </body>
    </html>
  );
}
