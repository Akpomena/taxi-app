import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css'
import './styles/default.css'
import './styles/fontawesome.css'
import BootstrapJs from "./components/bootstrapJS";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <BootstrapJs />
      </body>
    </html>
  );
}
