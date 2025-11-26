import profileImg from "../assets/profile.jpg";
// You'll need to install these icons, e.g., npm install react-icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 

// NOTE: For the exact hexagon shape, you'd need custom CSS/Tailwind configuration. 
// The code below implements the glow and size but uses a circle shape with a strong shadow 
// to visually approximate the inspiration image's border/glow effect.

function Master() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 bg-sky-800 text-white"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
        
        {/* === LEFT SIDE: Text Content (unchanged) === */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-xl text-gray-300 mb-2">Hello, It's Me</p>
      <h1 className="text-5xl md:text-6xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
  UN SOMNANG
</h1>





          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            And I'm a <span className="text-cyan-500">Frontend Developer</span>
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-gray-400 max-w-lg">
            I design and build modern web applications using{" "}
            <span className="text-cyan-500 font-semibold">React</span>,{" "}
            <span className="text-cyan-500 font-semibold">TailwindCSS</span>, and{" "}
            <span className="text-cyan-500 font-semibold">Laravel</span>.
          </p>

          <div className="flex justify-center md:justify-start gap-3 mb-8">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 border border-cyan-500">
                <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 border border-cyan-500">
                <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 border border-cyan-500">
                <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 border border-cyan-500">
                <FaLinkedinIn />
            </a>
          </div>

          {/* <a
            href="/path/to/your/cv.pdf" // Change this path
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold tracking-wider px-8 py-3 rounded-full transition-colors duration-300 uppercase shadow-lg shadow-cyan-500/50"
          >
            Download CV
          </a> */}
        </div>

        {/* === RIGHT SIDE: Image Content with Glow Effect === */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          
          {/* Outer container for the glow effect.
              The glow is achieved with a larger border and a vibrant shadow.
              Using 'rounded-full' for a circle, as an approximation of the hexagon. */}
          <div className="relative p-2 rounded-full overflow-hidden bg-gray-800 
                          border-4 border-transparent shadow-2xl shadow-cyan-500/70">
            {/* The actual image */}
            <img
              src={profileImg}
              alt="Profile"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Master;