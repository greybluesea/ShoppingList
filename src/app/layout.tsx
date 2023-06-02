import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopping List",
  description: "Next.js + Prisma + SQList",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-slate-800 text-slate-100 container max-w-sm mx-auto p-4 flex flex-col justify-center min-h-screen"
        }
        style={{ marginTop: "-12svh" }}
      >
        {children}
      </body>
    </html>
  );
}
