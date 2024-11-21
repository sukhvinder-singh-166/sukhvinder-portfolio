import localFont from "next/font/local";
import "./globals.css";
import BackToTopButton from "./components/common/BackToTopButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sukhvinder Singh",
  description: "Sukhvinder singh Full stack Developer",
  openGraph: {
    title: "Sukhvinder Singh",
    description: "Sukhvinder Singh - Full Stack Developer",
    images: [
      {
        url: "./meta-image.png",
        width: 1200,
        height: 630,
        alt: "Sukhvinder Singh Full Stack Developer",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BackToTopButton />
        {children}
      </body>
    </html>
  );
}
