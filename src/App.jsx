import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import './App.css'

function App() {
    return (
        <>
            <nav>
                <Link to="/">Hem</Link> | <Link to="/om">Om</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/om" element={<About />} />
            </Routes>
        </>
    )
}

export default App
