import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Shows from './pages/Shows'
import Productions from './pages/Productions'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="shows" element={<Shows />} />
        <Route path="productions" element={<Productions />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App