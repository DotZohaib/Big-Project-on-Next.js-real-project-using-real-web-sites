

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer"; // Corrected Footer import
import Navbar from "../components/Navbar";
import Providers from '../components/ProgressBarProvider';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZenZone",
  description: "This is an e-commerce store like ZenZone where you can purchase A-Z products.", // Corrected metadata
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
          <Footer /> {/* Moved inside Providers */}
      </body>
    </html>
  );
}
