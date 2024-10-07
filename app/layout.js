import "./globals.css";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import Home from "./page";

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="body">
        <Nav/>
        <Home/>
        <Footer/>
      </body>
    </html>
  );
}
