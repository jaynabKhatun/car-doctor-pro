import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car Doctor Pro is a car care and maintenance platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body className={inter.className}>
        <div className="container mx-auto">
          <Navbar />
          {children}

          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
