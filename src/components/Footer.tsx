import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-[#002D85] text-white text-center py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">UN Somnang</h2>
        <p className="text-sm mb-1">2002, Phnom Penh, Cambodia</p>
        <p className="text-sm mb-4">
          <a href="tel:+855962084112" className="hover:underline">
            ++855 96 20 84 112
          </a>{" "}
          |{" "}
          <a
            href="mailto:unsomnangid@gmail.com"
            className="hover:underline text-cyan-300"
          >
            unsomnangid@gmail.com
          </a>
        </p>

        <div className="flex justify-center gap-5 text-xl mb-4">
          <a href="https://www.facebook.com/abxa920o4d" className="hover:text-cyan-400"><BsFacebook /></a>
          <a href="#" className="hover:text-cyan-400"><BsTwitter /></a>
          <a href="#" className="hover:text-cyan-400"><BsYoutube /></a>
          <a href="#" className="hover:text-cyan-400"><BsInstagram /></a>
          <a href="#" className="hover:text-cyan-400"><BsLinkedin /></a>
          <a href="#" className="hover:text-cyan-400"><BsGithub /></a>
        </div>

        <div className="border-t border-gray-300 opacity-40 w-2/3 mx-auto mb-3"></div>

        <p className="text-sm text-gray-200">
          © {new Date().getFullYear()} <span className="font-semibold">អុន​ សំណាង</span>,
          All Rights Reserved | Designed by <span className="font-semibold">អុន សំណាង</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
