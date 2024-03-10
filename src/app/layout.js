import { Navbar } from "@/components/Navbar";
import "../styles/main.scss";

export const metadata = {
  title: "Prelux Portfolio",
  description: "Portfolio do celów niecnych",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
