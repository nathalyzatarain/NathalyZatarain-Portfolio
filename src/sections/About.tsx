import {motion} from 'framer-motion'


const skills = [
  'React',
  'TypeScript',
  'TailwindCSS',
  'Angular',
  'GSAP',
  'Git',
  'Figma',
  'Responsive Design',
]

function About() {
  return (
    <section className="relative bg-black text-white py-32 px-8">

      <div className="max-w-7xl mx-auto">

        <div className="mb-20">

          <p className="text-purple-400 mb-4">
            About Me
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Creating modern experiences
            with clean and interactive UI.
          </h2>

          <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
            Frontend developer passionate about building elegant,
            responsive and visually engaging web applications
            using modern technologies and animation libraries.
          </p>

        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6"> */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
bg-white/5
border border-white/10
backdrop-blur-md
rounded-3xl
p-8
hover:border-purple-500
hover:-translate-y-2
hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]
transition-all
duration-300
group
"
            >
              <h3 className="text-lg font-medium">
                {skill}
              </h3>
            </div>
          ))}
</motion.div>
        </div>
      {/* </div> */}
    </section>
  )
}

export default About