import { useEffect, useState } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

function Header() {
  const [currentTheme, setCurrentTheme] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setCurrentTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setCurrentTheme("light");
    }
  }, []);







  return (
    <header className="bg-white dark:bg-gray-900 fixed w-full top-0 left-0 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <h1 className="text-2xl font-bold text-cyan-500">PORTFOLIO</h1>

        <HiMenu className="md:hidden cursor-pointer text-lg hover:text-cyan-500 transition-colors" onClick={() => setMenuOpen(!menuOpen)} />

          <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-cyan-500 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-cyan-500 transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-cyan-500 transition-colors duration-300">Skill</a>
          <a href="#projects" className="hover:text-cyan-500 transition-colors duration-300">Projects</a>
          <a href="#experience" className="hover:text-cyan-500 transition-colors duration-300">Experience</a>
          <a href="#contact" className="hover:text-cyan-500 transition-colors duration-300">Contact</a>
        </nav>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 w-full shadow-md">
          <nav className="flex flex-col items-center gap-4 py-4">
            <a href="#home" className="hover:text-cyan-500 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" className="hover:text-cyan-500 transition-colors duration-300" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" className="hover:text-cyan-500 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Skill</a>
            <a href="#projects" className="hover:text-cyan-500 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#experience" className="hover:text-cyan-500 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#contact" className="hover:text-cyan-500 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
