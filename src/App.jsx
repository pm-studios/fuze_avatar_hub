import Header from './components/Header'
import Hero from './components/Hero'
import AvatarGrid from './components/AvatarGrid'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">      
      <div className="main-content">
        <Header />
        <Hero />
        <AvatarGrid />
      </div>
      <Footer />
    </div>
  )
}

export default App
