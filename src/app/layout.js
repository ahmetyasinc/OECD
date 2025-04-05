import "./globals.css"; // ← en üste alındı
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Internships | OECD",
  description: "Apply now for the OECD Online Assessment Programme.",
  icons: {
    icon: "/icon2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="layout">
        <Navbar />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

