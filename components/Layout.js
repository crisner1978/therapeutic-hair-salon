import Banner from "./Banner"
import Footer from "./Footer"
import GoogleMap from "./GoogleMap"
import Header from "./Header"



function Layout({ children }) {
    return (
        <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
            <Header />
            <Banner />
            {children}
            <GoogleMap />
            <Footer />
        </div>
    )
}

export default Layout
