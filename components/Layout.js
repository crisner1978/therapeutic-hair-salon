import Header from "./Header"

function Layout({ children }) {
    return (
        <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
            <Header />
            {children}
        </div>
    )
}

export default Layout
