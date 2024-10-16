/* eslint-disable react/prop-types */
import Header from "./Header";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-irina">
      <Header />
      <main className="flex-grow container mx-auto py-10 font-roboto">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
