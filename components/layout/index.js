import Modal from "../Modal";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="bg-gray-50 h-screen">
      <Header />
      {children}
      <Footer />
      <Modal />
    </div>
  );
}

export default Layout;
