import { useEffect, useState, useRef } from "react";
import LogoNav from "./images/LogoNav.jpg";
import GetAppointment from "./pages/GetAppointment";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const menuRef = useRef(); // Reference for the mobile menu

  // Toggle Mobile Menu
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Close Mobile Menu if clicking outside
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMobileMenuOpen(false);
    }
  };

  // Toggle Appointment Modal
  const toggleAppointmentModal = () =>
    setShowAppointmentModal(!showAppointmentModal);

  // Scroll behavior for active section and shadow
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const offset = 200;

          if (rect.top >= 0 && rect.top < windowHeight - offset) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on initial render to set the correct section on page load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Attach event listener to handle clicks outside
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup on unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const yOffset = -navbarHeight;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileMenuOpen(false); // Close mobile menu if open
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`px-4 sm:px-6 md:px-8 flex items-center justify-between h-20 sticky top-0 z-50 transition-shadow duration-300 bg-[#EAF3F8] ${
          hasShadow ? "shadow-md" : ""
        }`}
      >
        {/* Logo */}
        <div onClick={() => scrollToSection("home")} className="cursor-pointer">
          <img src={LogoNav} alt="Logo" className="h-7 sm:h-16 pl-2 sm:pl-4" />
        </div>

        {/* Navbar Links (Desktop) */}
        <div className="hidden md:flex items-center justify-end gap-10 mr-10">
          <div className="flex items-center text-lg justify-center font-bold text-custom-blue gap-9 cursor-pointer">
            {["home", "about", "services", "contact"].map((section) => (
              <ul key={section}>
                <li
                  className={`${
                    activeSection === section ? "text-blue-700 font-bold" : ""
                  } hover:text-blue-600 transition-colors duration-200`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </li>
              </ul>
            ))}
          </div>
          <button
            onClick={toggleAppointmentModal}
            className="bg-custom-blue text-white font-semibold text-md rounded-md px-4 py-2 transition-transform duration-300 hover:bg-blue-700"
          >
            Get Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={menuRef} // Reference for mobile menu
            className="fixed top-0 right-0 bg-white w-1/2 h-1/2 z-40 shadow-lg md:hidden flex flex-col items-center"
          >
            <ul className="flex flex-col items-center gap-10 mt-12">
              {["home", "about", "services", "products", "team", "contact"].map(
                (section) => (
                  <li
                    key={section}
                    className={`${
                      activeSection === section
                        ? "text-custom-blue font-bold"
                        : ""
                    } hover:text-blue-600 transition-colors duration-200`}
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </li>
                )
              )}
            </ul>
            <button
              onClick={toggleAppointmentModal}
              className="bg-custom-blue font-semibold text-md rounded-md p-2 text-white mt-8 hover:bg-blue-500 transition-colors"
            >
              Get Appointment
            </button>
          </div>
        )}
      </nav>

      {/* Modal for Get Appointment */}
      {showAppointmentModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleAppointmentModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full h-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal on inner click
          >
            <button
              className="absolute top-2 right-4 text-slate-700 text-4xl hover:text-gray-800"
              onClick={toggleAppointmentModal}
            >
              ×
            </button>
            <GetAppointment />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
