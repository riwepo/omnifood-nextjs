import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Omnifood Next.js",
  description: "Omnifood project implemented in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-[0.8rem] lg:text-[0.9rem] 2xl:text-[1rem]">
      <body className={`${rubik.className} text-greys-200`}>{children}</body>
    </html>
  );
}
