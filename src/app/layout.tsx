import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import 'app/sass/globals.sass';

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YStore",
  description: "YStore for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
