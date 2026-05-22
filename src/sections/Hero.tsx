function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center px-10">

      {/* Glow background */}
      <div className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] bg-purple-700 rounded-full blur-[140px] opacity-30"></div>

     <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:120px_120px]"></div>
      {/* Content */}
      <div className="relative z-10 max-w-3xl">

        <p className="text-purple-400 text-lg mb-6 tracking-wide">
          Frontend Developer
        </p>

        <h1 className="text-7xl bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent md:text-8xl font-bold leading-tight mb-8">
          Nathaly
          <br />
          Zatarain
        </h1>

        <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl mb-10">
          Crafting elegant and interactive digital experiences
          with modern frontend technologies and creative UI
          animations.
        </p>

        <div className="flex gap-5">

          <button className="bg-purple-600 hover:bg-purple-500 transition-all duration-300 px-8 py-4 rounded-full font-medium">
            View Projects
          </button>

          <button className="border border-zinc-700 hover:border-purple-500 hover:text-purple-400 transition-all duration-300 px-8 py-4 rounded-full font-medium shadow-[0_0_40px_rgba(168,85,247,0.5)]">
            Contact Me
          </button>

        </div>
      </div>
    </section>
  )
}

export default Hero