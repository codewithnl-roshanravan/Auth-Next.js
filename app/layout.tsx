import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../src/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Auth",
  description: "Next.js Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          <div className="content">{children}</div>
        </div>
      </body>
    </html>
  );
}
