import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export const metadata = {
  title: "Jeremy Erik Leong's Resume",
  description: "Jeremy Erik Leong is a Front-End Developer and designer that based in Kuala Lumpur, Malaysia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
