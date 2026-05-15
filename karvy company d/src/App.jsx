import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer.jsx'
import { Outlet, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="pt-6 bg-white dark:text-white flex flex-col min-h-screen">
      <Header />
      <main className="flex-wrap">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
