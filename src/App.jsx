import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AvatarGrid from './components/AvatarGrid'
import Footer from './components/Footer'
import UnityAvatarModal from './components/UnityAvatarModal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="app">
      <div className="main-content">
        <Header />
        <Hero />
        <AvatarGrid onOpenModal={() => setIsModalOpen(true)} />
      </div>
      <Footer onOpenModal={() => setIsModalOpen(true)} />

      <UnityAvatarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default App
