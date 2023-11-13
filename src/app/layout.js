import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HeManT",
  description:
    "Hello Everyone! My Name is Hemant Kathuria. I am a Cyber Security Analyst and a Full Stack Developer. I enjoy playing CTFs, developing, and learning whenever I get a chance. If you want to play a CTF or discuss anything about security, feel free to ping me.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
