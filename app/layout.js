import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Home | Reavyn Tech Alliance",
  description: "Smart Digital Solutions",
  icons: {
    icon: "https://i.ibb.co/VWDMqc8c/lgo.png", // ya "/logo.png"
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
