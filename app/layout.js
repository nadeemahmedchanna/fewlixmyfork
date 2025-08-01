import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import CursorFollower from "./components/CursorFollower";


export const metadata = {
  title: "Fewlix | Your One-Stop Creative Studio",
  description: "Fewlix is your one-stop creative studio for trade show booth design, exhibition stand layouts, and 3D modeling. We craft bold, high-impact visuals for corporate and new businesses across the USA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <CursorFollower/>
        <Header />
        {children}
      </body>
    </html>
  );
}
