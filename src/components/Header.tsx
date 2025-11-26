import { useEffect, useState } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";

function Header() {
  const [currentTheme, setCurrentTheme] = useState("");

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

  const changeTheme = (theme: string) => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setCurrentTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setCurrentTheme("dark");
    }
  };






  return (
    <header className="bg-white dark:bg-gray-900 fixed w-full top-0 left-0 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <h1 className="text-2xl font-bold text-cyan-500">PORTFOLIO</h1>

          <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-cyan-500 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-cyan-500 transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-cyan-500 transition-colors duration-300">Skill</a>
          <a href="#projects" className="hover:text-cyan-500 transition-colors duration-300">Projects</a>
          <a href="#experience" className="hover:text-cyan-500 transition-colors duration-300">Experience</a>
          <a href="#contact" className="hover:text-cyan-500 transition-colors duration-300">Contact</a>
        </nav>

        <div className="flex items-center gap-4">

          {currentTheme === "dark" ? (
            <BsFillMoonFill
              className="cursor-pointer text-lg hover:text-cyan-500 transition-transform hover:scale-110 dark:text-gray-200"
              onClick={() => changeTheme("light")}
            />
          ) : (
            <BsSun
              className="cursor-pointer text-lg hover:text-cyan-500 transition-transform hover:scale-110 dark:text-gray-200"
              onClick={() => changeTheme("dark")}
            />
          )}
          {/* <AiFillMessage className="cursor-pointer hover:text-cyan-500 dark:text-gray-200" />
          <MdNotificationsActive className="cursor-pointer hover:text-cyan-500 dark:text-gray-200" />
          <BsFillQuestionCircleFill className="cursor-pointer hover:text-cyan-500 dark:text-gray-200" /> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
