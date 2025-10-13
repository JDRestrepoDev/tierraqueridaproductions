import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import MusicBanner from "../components/MusicBanner"


const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* <MusicBanner />  */}
   
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
