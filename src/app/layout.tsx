import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Programmer memes",
  description: "inspired by www.nasa.gov/content/goddard/what-did-hubble-see-on-your-birthday",
  openGraph: {
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'โปรแกรมเมอร์ Quote',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900/10">
        <main>
        {children}
        </main>
        </body>
    </html>
  );
}
