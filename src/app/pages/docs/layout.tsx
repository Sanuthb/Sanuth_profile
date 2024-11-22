import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanuth Bibin B | docs ",
  description: "This is my profile documentation",
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
          {children}
        </>
      </body>
    </html>
  );
}
