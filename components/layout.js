import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <TopNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
