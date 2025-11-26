import profileImg from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="py-20  bg-sky-800 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        <img
          src={profileImg}
          alt="Profile"
          className="w-56 h-56 rounded-full object-cover shadow-lg border-4 border-cyan-500 hover:scale-105 transition-transform"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-cyan-500">About Me</h2>
          <p className="text-lg text-white dark:text-gray-300">
            I am a passionate web developer specializing in building beautiful, responsive, and functional
            websites using modern frameworks. I love exploring new technologies and improving user experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
