import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Programmer memes",
  description: "inspired by www.nasa.gov/content/goddard/what-did-hubble-see-on-your-birthday",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900/10">
        <main >
        {children}
        </main>
        </body>
    </html>
  );
}
