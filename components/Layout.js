import Footer from "./Footer";
import GoogleMap from "./GoogleMap";
import Header from "./Header";
import Modal from "./Modal";

function Layout({ children }) {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Header />
      {children}
      <GoogleMap />
      <Footer />
      <Modal />
    </div>
  );
}

export default Layout;
