import Footer from './Footer'
import Header from "./Header";
import Modal from "../Modal"

function Layout({ children }) {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Header />
      {children}
      <Footer />
      <Modal />
    </div>
  );
}

export default Layout;
