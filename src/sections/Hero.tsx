import { motion } from "framer-motion";
import Button from "../components/Button";

function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center px-10 pt-20">
      {/* Glow background */}
     <div className="absolute top-[-150px] right-0 w-[500px] h-[500px] bg-purple-700 rounded-full blur-[140px] opacity-30"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:120px_120px]"></div>
      {/* Content */}
      {/* <div className="relative z-10 max-w-3xl"> */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        {/* <p className="text-purple-400 text-lg mb-6 tracking-wide">
          Frontend Developer
        </p> */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-purple-400 text-lg mb-6 tracking-wide"
        >
          Frontend Developer
        </motion.p>

        {/* <h1 className="text-7xl bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent md:text-8xl font-bold leading-tight mb-8"> */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-7xl md:text-8xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent"
        >
          Nathaly
          <br />
          Zatarain
        </motion.h1>
        {/* </h1> */}

        {/* <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl mb-10"> */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-zinc-400 text-xl leading-relaxed max-w-2xl mb-10"
        >
          Crafting elegant and interactive digital experiences with modern
          frontend technologies and creative UI animations.
        </motion.p>
        {/* </p> */}

        {/* <div className="flex gap-5"> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-5 mt-10"
        >
          {/* <button className="bg-purple-600 hover:bg-purple-500 transition-all duration-300 px-8 py-4 rounded-full font-medium">
            View Projects
          </button>

          <button className="border border-zinc-700 hover:border-purple-500 hover:text-purple-400 transition-all duration-300 px-8 py-4 rounded-full font-medium shadow-[0_0_40px_rgba(168,85,247,0.5)]">
            Contact Me
          </button> */}
          <Button text="View new proyects" />
          <Button text="Contact Me" variant="secondary" />
        </motion.div>

        {/* </div> */}
      </motion.div>
      {/* </div> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border border-zinc-600 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
