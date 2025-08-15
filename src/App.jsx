import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import ErrorPage from './pages/ErrorPage'

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile/:id" element={<UserProfile />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App
