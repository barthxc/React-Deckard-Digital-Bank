import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Productos from './components/Productos/Productos'
import Adaptamos from './components/Adaptamos/Adaptamos'
import Servicios from './components/Servicios/Servicios'
import Viaje from './components/Viaje/Viaje'
import Aside from './components/Aside/Aside'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero/>
    <Productos/>
    <Adaptamos/>
    <Servicios/>
    <Viaje/>
    <Aside/>
  </React.StrictMode>,
)
