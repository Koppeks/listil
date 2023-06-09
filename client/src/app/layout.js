import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/store/provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Listil",
  description: "Crea tus listas, guarda tus fechas, y haz recordatorios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
