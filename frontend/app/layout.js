import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LoginContext, LoginProvider } from "./components/LoginContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChefMate",
  description: "Group 13 - Chas Challange",
};

export default function RootLayout({ children }) {
  return (
    <LoginProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />

          {children}
          <Footer />
        </body>
      </html>
    </LoginProvider>
  );
}
