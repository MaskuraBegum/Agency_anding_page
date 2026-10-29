import { Routes, Route } from 'react-router'
import Home from './components/sections/Home'
import NotFound from './components/layout/Error'

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

    </Routes>
  )
}