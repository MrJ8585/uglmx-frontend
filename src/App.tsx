import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Test from './pages/Test'
import AdminDashboard from './pages/AdminDashboard'

function App() {

  return (
    <HashRouter>
      <div className='overflow-x-hidden no-scrollbar'>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
