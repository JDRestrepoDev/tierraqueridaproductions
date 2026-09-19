import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Shows from './pages/Shows'
import Productions from './pages/Productions'
import Contact from './pages/Contact'
import CumbiaFest from './pages/CumbiaFest'
import DesdeSeptiembre2025 from './pages/DesdeSeptiembre2025'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="shows" element={<Shows />} />
        <Route path="productions" element={<Productions />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cumbiafest-2026" element={<CumbiaFest />} />
        <Route path="desde-septiembre-2025" element={<DesdeSeptiembre2025 />} />
      </Route>
    </Routes>
  )
}

export default App