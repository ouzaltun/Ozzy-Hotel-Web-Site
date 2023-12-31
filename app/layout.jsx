import { Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ozzy Hotel",
  description: "Ozzy Hotel hakkında her şey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
