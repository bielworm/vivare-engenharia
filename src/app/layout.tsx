import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { MenuHamburguer } from "@/components/Partials/MenuHamburguer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from 'react-hot-toast'
import 'swiper/css/bundle'
import "../styles/index.scss"
import DialogPrivacityPolicy from "@/components/Dialogs/DialogPrivacityPolicy";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vivare Engenharia",
  icons: {
    icon: "/fav.ico",
  },
  description: "O desafio da VIVARE Engenharia é renovar-se a cada dia, adaptando-se às necessidades de seus clientes e buscando a excelência em cada novo projeto.",
  openGraph: {
    url: "https://vivarengenharia.com.br",
    title: "Vivare Engenharia",
    images: [
      {
        url: 'https://vivarengenharia.com.br/img/seo.png',
        width: 1200,
        height: 627,
        alt: 'vivare',
        type: 'image/png',
      },
    ],
    siteName: "Vivare Engenharia",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <MenuHamburguer />
        <Toaster
          toastOptions={{
            className: 'bg-zinc-500 text-white',
            style: {
              zIndex: 999999,
            },
          }}
        />
        <DialogPrivacityPolicy />
      </body>
    </html>
  );
}
