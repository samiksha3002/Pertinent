import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pertinent | Construction Services | Civil Engineering Experts",
  description:
    "Pertinent offers top-quality construction, civil engineering, and infrastructure development services. Delivering safe, timely, and cost-effective construction solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* FontAwesome for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-dcRli+Ry1fuG9jZgfwEeg0EpspSK9oLlJhxYqLdb6n6gASzXhD1f7LR1jXqTL5c9Z6WPoCvU+uR8Vrg8fW8sxQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Favicon (Optional) */}
        <link
          rel="icon"
          href="/PCS Logo Without text white.jpg"
          type="image/jpg "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body
        className={`${manrope.className} bg-black text-white min-h-screen scroll-smooth antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
