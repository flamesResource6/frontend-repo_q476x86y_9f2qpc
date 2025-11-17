import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Styles from './components/Styles'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-amber-900">
      <Navbar />
      <Hero />
      <Styles />
      <Gallery />
      <Contact />
      <footer className="bg-amber-950 text-amber-100/90 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Mehndi Mahal. All rights reserved.</p>
          <div className="text-xs uppercase tracking-wide">Crafted with love and natural henna</div>
        </div>
      </footer>
    </div>
  )
}

export default App
