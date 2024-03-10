//Components
import { Navbar } from "@/components/Navbar";

// Styles
import "../styles/css/reset.css";
import "../styles/scss/misc/globals.scss";


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
