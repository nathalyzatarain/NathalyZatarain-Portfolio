function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-md bg-white/5 border border-white/10 px-6 py-4 rounded-full">

        <h2 className="text-white text-xl font-semibold tracking-wide">
          NZ
        </h2>

        <ul className="hidden md:flex items-center gap-10 text-zinc-400">

          <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
            About
          </li>

          <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
            Projects
          </li>

          <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
            Contact
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Navbar