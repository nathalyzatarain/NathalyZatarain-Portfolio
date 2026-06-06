import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"

function App() {
  return (
    <>
     <div className="overflow-x-hidden">
    <Navbar/>
    <Hero/>
    <About/>

     </div>
    </>
  )
}

export default App
