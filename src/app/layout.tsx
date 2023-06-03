import { ClerkProvider, UserButton } from "@clerk/nextjs";
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
      <ClerkProvider>
        <body
          className={
            inter.className +
            " bg-slate-800 text-slate-100 container max-w-sm mx-auto p-4 flex flex-col justify-center min-h-screen"
          }
          style={{ marginTop: "-12svh" }}
        >
          {children}
          <footer>
            <ul className="fixed bottom-20 left-0 right-0 flex flex-col justify-center items-center ">
              <li>NEXT.js (Server Actions)</li>
              <li>Prisma + SQLite</li>
              <li>ClerkAuth</li>
              <li className="flex gap-2">
                learned from Kyle(Web Dev Simplified), powered by greybluesea
                <UserButton afterSignOutUrl="/" />
              </li>
            </ul>
          </footer>
        </body>
      </ClerkProvider>
    </html>
  );
}
