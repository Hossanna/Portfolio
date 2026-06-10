import { useState, useEffect, useRef } from "react";
import { Box, Container } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const skills = [
  { name: "HTML", level: 90, color: "#FF6B6B" },
  { name: "CSS", level: 85, color: "#4ECDC4" },
  { name: "JavaScript", level: 80, color: "#45B7D1" },
  { name: "React", level: 85, color: "#FFA07A" },
  { name: "Next.js", level: 75, color: "#98D8C8" },
  { name: "Material UI", level: 80, color: "#F7DC6F" },
  { name: "Bootstrap", level: 70, color: "#FF6B6B" },
  { name: "REST API", level: 75, color: "#4ECDC4" },
  { name: "Responsive Design", level: 90, color: "#45B7D1" },
  { name: "Git", level: 80, color: "#FFA07A" },
  { name: "GitHub", level: 85, color: "#98D8C8" },
  { name: "Team Work", level: 85, color: "#F7DC6F" },
];

const experience = [
  {
    title: "Associate Frontend Developer",
    company: "Simplify Technology Limited",
    period: "January 2024 - Present",
    description:
      "Built and maintained React.js / Next.js frontend features for loan and banking apps. Improved UI consistency across screens using Material UI, reducing interface issues by ~20%. Integrated REST APIs for real-time data display.",
    color: "#98D8C8",
  },
  {
    title: "Frontend Developer Intern",
    company: "Rework Technologies Limited",
    period: "January 2024 - August 2024",
    description:
      "Integrated API endpoints to display dynamic data. Built responsive web applications with React, HTML, and CSS. Worked in team projects focused on usability and maintainability.",
    color: "#FF6B6B",
  },
  {
    title: "Frontend Developer Intern",
    company: "Branddrive Software Company",
    period: "February 2023 - May 2023",
    description:
      "Developed responsive UIs for a dating app using React, HTML, and CSS. Added multilingual support in six languages using React i18next. Contributed to delivering three project modules ahead of schedule.",
    color: "#4ECDC4",
  },
  {
    title: "Frontend Developer Tutor",
    company: "Center 4 Tech",
    period: "August 2023",
    description:
      "Taught HTML, CSS, JavaScript, and responsive design to teens. Supervised projects, increasing course completion rates by 25%.",
    color: "#45B7D1",
  },
  {
    title: "Frontend Developer Intern",
    company: "Abocoders Academy Minna",
    period: "February 2022 - July 2022",
    description:
      "Converted Figma designs into web interfaces. Created structured learning materials, improving student completion rates by 30%.",
    color: "#FFA07A",
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(
    new Set(),
  );
  const mainRef = useRef<HTMLElement | null>(null);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[data-section]");
      sections.forEach((section) => {
        const sectionId = section.getAttribute("data-section");
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100 && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.getAttribute("data-animate-id");
          if (elementId) {
            setAnimatedElements((prev) => new Set(prev).add(elementId));
          }
        }
      });
    };

    const rootElement = mainRef.current;
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.05,
      root: rootElement ?? null,
      rootMargin: "0px 0px -50px 0px",
    });

    // Observe elements with data-animate-id
    const animateElements = document.querySelectorAll("[data-animate-id]");
    animateElements.forEach((el) => observer.observe(el));

    const scrollContainer = rootElement ?? window;
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(`section[data-section="${id}"]`);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`flex flex-col lg:flex-row min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className={`lg:hidden fixed top-4 left-4 z-50 p-3 rounded-full shadow-xl transition-all duration-300 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-full transform transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } ${isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"} border-r shadow-xl`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Menu</div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className={`p-2 rounded-full transition-colors ${isDarkMode ? "text-white hover:bg-gray-800" : "text-gray-900 hover:bg-gray-100"}`}
            aria-label="Close menu"
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>
        <div className="p-4 space-y-6">
          <div className="text-center">
            <img
              src={`${import.meta.env.BASE_URL}picture.JPG`}
              alt="BIVAN HOSANNA"
              className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
            />
            <h1 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>BIVAN HOSANNA</h1>
            <p className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>B.Eng Computer Engineering</p>
            <a
              href="https://docs.google.com/document/d/1BLmBpAsRtiBGPqoihkFJB99fYEk2hUGuz4C348Nf1Qk/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block text-xs font-semibold ${isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}`}
            >
              Download Resume
            </a>
          </div>
          <nav className="space-y-2">
            {[
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Work Experience" },
              { id: "education", label: "Education" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded transition-colors ${
                  activeSection === item.id
                    ? "bg-blue-600 text-white font-semibold"
                    : isDarkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex justify-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <a href="https://github.com/Hossanna" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}>
              <GitHubIcon />
            </a>
            <a href="mailto:hosabivan@gmail.com" className={`${isDarkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}>
              <EmailIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}>
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`hidden lg:flex w-80 ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border-r p-8 h-screen sticky top-0 overflow-y-auto flex-col shadow-xl`}
      >
        <div className="text-center mb-6 lg:mb-8">
          <img
            src={`${import.meta.env.BASE_URL}picture.JPG`}
            alt="BIVAN HOSANNA"
            className="w-28 lg:w-36 h-28 lg:h-36 mx-auto mb-4 rounded-full object-cover"
          />
          <h1 className={`text-xl lg:text-2xl font-bold ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-2`}>
            BIVAN HOSANNA
          </h1>
          <p
            className={`text-xs lg:text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-4`}
          >
            B.Eng Computer Engineering
          </p>
          <a
            href="https://docs.google.com/document/d/1BLmBpAsRtiBGPqoihkFJB99fYEk2hUGuz4C348Nf1Qk/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs lg:text-sm font-semibold ${isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}`}
          >
            Download Resume
          </a>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 flex-1 grid grid-cols-2 lg:grid-cols-1 lg:space-y-1 gap-2 lg:gap-0">
          {[
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "experience", label: "Work Experience" },
            { id: "education", label: "Education" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-3 lg:px-4 py-2 rounded text-sm lg:text-base transition-colors ${
                activeSection === item.id
                  ? "bg-blue-600 text-white font-semibold"
                  : isDarkMode
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social Links */}
        <div
          className={`flex justify-center gap-4 pt-6 border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
        >
          <a
            href="https://github.com/Hossanna"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDarkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:hosabivan@gmail.com"
            className={`${isDarkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
          >
            <EmailIcon />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDarkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
          >
            <LinkedInIcon />
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main ref={mainRef} className="flex-1 overflow-y-auto">
        {/* About Section */}
        <section
          data-section="about"
          className="min-h-screen flex items-center justify-center py-8 lg:py-12 px-4 lg:px-8 animate-fade-in"
        >
          <Container maxWidth="md">
            <Box className="space-y-6 lg:space-y-8">
              <div className="animate-fade-in">
                <p
                  className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-4 lg:mb-6 text-sm lg:text-base`}
                >
                  Hi there! Welcome to my portfolio page.
                </p>
              </div>

              <div>
                <h2
                  className={`text-2xl lg:text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-2`}
                >
                  About Me
                </h2>
                <hr className="w-16 h-1 bg-blue-600 mb-4 lg:mb-6" />
              </div>

              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-sm lg:text-lg leading-relaxed`}
              >
                Hello, Hosanna here. I am a frontend developer from Nigeria,
                passionate about creating beautiful and functional web
                applications. I specialize in React, Next.js, and modern web
                technologies.
              </p>

              <div>
                <h3
                  className={`text-lg lg:text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-4 lg:mb-6`}
                >
                  Areas of Focus
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4">
                  {[
                    {
                      title: "Frontend Dev",
                      color: isDarkMode
                        ? "bg-red-900 text-red-300"
                        : "bg-red-100 text-red-600",
                    },
                    {
                      title: "Web Design",
                      color: isDarkMode
                        ? "bg-teal-900 text-teal-300"
                        : "bg-teal-100 text-teal-600",
                    },
                    {
                      title: "React Dev",
                      color: isDarkMode
                        ? "bg-blue-900 text-blue-300"
                        : "bg-blue-100 text-blue-600",
                    },
                    {
                      title: "API Integration",
                      color: isDarkMode
                        ? "bg-orange-900 text-orange-300"
                        : "bg-orange-100 text-orange-600",
                    },
                    {
                      title: "UI/UX",
                      color: isDarkMode
                        ? "bg-green-900 text-green-300"
                        : "bg-green-100 text-green-600",
                    },
                    {
                      title: "Performance",
                      color: isDarkMode
                        ? "bg-yellow-900 text-yellow-300"
                        : "bg-yellow-100 text-yellow-600",
                    },
                  ].map((area, idx) => (
                    <div
                      key={idx}
                      className={`${area.color} p-3 lg:p-6 rounded-lg text-center hover:shadow-lg transition-all shadow-md ${
                        animatedElements.has(`service-${idx}`)
                          ? idx % 2 === 0
                            ? "animate-slide-in-left"
                            : "animate-slide-in-right"
                          : "opacity-0"
                      }`}
                      data-animate-id={`service-${idx}`}
                    >
                      <div className="text-2xl lg:text-3xl mb-2">
                        <CodeIcon />
                      </div>
                      <h4 className="font-semibold text-xs lg:text-sm">{area.title}</h4>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`${isDarkMode ? "bg-gray-700" : "bg-gray-100"} p-4 lg:p-8 rounded-lg shadow-lg ${
                  animatedElements.has("key-highlight")
                    ? "animate-slide-in-left"
                    : "opacity-0"
                }`}
                data-animate-id="key-highlight"
              >
                <h3
                  className={`text-lg lg:text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-3 lg:mb-4`}
                >
                  💡 Key Highlight
                </h3>
                <p
                  className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-sm lg:text-base`}
                >
                  You will be happy to know that I have completed a lot of
                  projects successfully! With 2+ years of experience in fintech
                  and consumer products, I bring both technical expertise and
                  creative problem-solving.
                </p>
              </div>
            </Box>
          </Container>
        </section>

        {/* Skills Section */}
        <section
          data-section="skills"
          className={`min-h-screen flex items-center justify-center py-8 lg:py-12 px-4 lg:px-8 ${isDarkMode ? "bg-gray-800" : "bg-white"} animate-fade-in`}
        >
          <Container maxWidth="md">
            <Box className="space-y-6 lg:space-y-8">
              <div>
                <h2
                  className={`text-2xl lg:text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-2`}
                >
                  Skills
                </h2>
                <hr className="w-16 h-1 bg-blue-600 mb-4 lg:mb-6" />
              </div>

              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-sm lg:text-base`}
              >
                Some of the significant aptitudes which will assist me with
                achieving your objectives.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="animate-fade-in">
                    <div className="flex justify-between mb-2">
                      <h4
                        className={`font-semibold text-sm lg:text-base ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
                      >
                        {skill.name}
                      </h4>
                      <span
                        className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-xs lg:text-sm`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`w-full ${isDarkMode ? "bg-gray-600" : "bg-gray-200"} rounded-full h-3 overflow-hidden`}
                    >
                      <div
                        className="h-full transition-all duration-500 rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Box>
          </Container>
        </section>

        {/* Projects Section */}
        <section
          data-section="projects"
          className={`min-h-screen flex items-center justify-center py-8 lg:py-12 px-4 lg:px-8 ${isDarkMode ? "bg-gray-800" : "bg-white"} animate-fade-in`}
        >
          <Container maxWidth="md">
            <Box className="space-y-6 lg:space-y-8">
              <div>
                <h2
                  className={`text-2xl lg:text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-2`}
                >
                  Projects
                </h2>
                <hr className="w-16 h-1 bg-blue-600 mb-4 lg:mb-6" />
              </div>

              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-sm lg:text-base`}
              >
                Here are some of my major projects. Check out my GitHub for more!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {[
                  {
                    name: "SunnySide",
                    description: "A creative agency landing page with modern design.",
                    tech: "HTML, CSS, JavaScript",
                    github: "https://github.com/Hossanna/sunnySide",
                    demo: "https://hossanna.github.io/sunnySide/",
                    color: "#4ECDC4",
                    image: "/sunnySide.jpg",
                  },
                  {
                    name: "Simple Calculator",
                    description: "A functional calculator with clean UI.",
                    tech: "HTML, CSS, JavaScript",
                    github: "https://github.com/Hossanna/simpleCalculator",
                    demo: "https://hossanna.github.io/simpleCalculator/",
                    color: "#45B7D1",
                    image: "/simpleCalculator.jpg",
                  },
                  {
                    name: "Space Tourism",
                    description: "A space tourism website with multiple pages.",
                    tech: "HTML, CSS, JavaScript",
                    github: "https://github.com/Hossanna/spaceTourism",
                    demo: "https://hossanna.github.io/spaceTourism/",
                    color: "#FFA07A",
                    image: "/spaceTourism.jpg",
                  },
                  {
                    name: "Herbal Soap Project",
                    description: "A product landing page for an herbal soap brand.",
                    tech: "HTML, CSS, JavaScript",
                    github: "https://github.com/Hossanna/herbalSoapProject",
                    demo: "https://hossanna.github.io/herbalSoapProject/",
                    color: "#34D399",
                    image: "/herbalSoapProject.jpg",
                  },
                  {
                    name: "Multi-Step Form",
                    description: "A polished multi-step form with validation and progress.",
                    tech: "HTML, CSS, JavaScript",
                    github: "https://github.com/Hossanna/multi-step-form",
                    demo: "https://hossanna.github.io/multi-step-form/",
                    color: "#60A5FA",
                    image: "/multiStepForm.jpg",
                  },
                  {
                    name: "Todo List App",
                    description: "A task management app for creating and tracking todos.",
                    tech: "HTML, CSS, JavaScript",
                    github: "https://github.com/Hossanna/todoListApp",
                    demo: "https://hossanna.github.io/todoListApp/",
                    color: "#F97316",
                    image: "/todoListApp.jpg",
                  },
                  {
                    name: "Task Tracker",
                    description: "A productivity dashboard to track daily tasks.",
                    tech: "HTML, CSS, JavaScript",
                    github: "https://github.com/Hossanna/taskTracker",
                    demo: "https://hossanna.github.io/taskTracker/",
                    color: "#8B5CF6",
                    image: "/taskTracker.jpg",
                  },
                  {
                    name: "News Homepage",
                    description: "A responsive news homepage layout with category cards.",
                    tech: "HTML, CSS, JavaScript",
                    github: "https://github.com/Hossanna/news-homepage",
                    demo: "https://hossanna.github.io/news-homepage/",
                    color: "#22C55E",
                    image: "/newsHomepage.jpg",
                  },
                  {
                    name: "TicTacToe",
                    description: "A classic Tic Tac Toe game with interactive gameplay.",
                    tech: "HTML, CSS, JavaScript",
                    github: "https://github.com/Hossanna/ticTacToe",
                    demo: "https://hossanna.github.io/ticTacToe/",
                    color: "#F59E0B",
                    image: "/ticTacToe.jpg",
                  },
                ].map((project, idx) => (
                  <div
                    key={idx}
                    className={`${
                      isDarkMode ? "bg-gray-700" : "bg-white"
                    } rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-96 ${
                      animatedElements.has(`project-${idx}`)
                        ? idx % 2 === 0
                          ? "animate-slide-in-left"
                          : "animate-slide-in-right"
                        : "opacity-0"
                    }`}
                    data-animate-id={`project-${idx}`}
                  >
                    {/* Image Section - 70% height */}
                    <div className="w-full h-64 overflow-hidden bg-gray-300">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content Section - 30% height */}
                    <div className="flex-1 p-4 lg:p-6 flex flex-col justify-between">
                      <div>
                        <h3
                          className={`text-lg lg:text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-2`}
                        >
                          {project.name}
                        </h3>
                        <p
                          className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-xs lg:text-sm mb-2`}
                        >
                          {project.description}
                        </p>
                        <p
                          className={`text-xs font-semibold ${isDarkMode ? "text-blue-400" : "text-blue-600"} mb-3`}
                        >
                          {project.tech}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 text-center px-3 py-2 rounded text-xs lg:text-sm font-semibold transition-colors ${
                            isDarkMode
                              ? "bg-gray-600 text-white hover:bg-gray-500"
                              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                          }`}
                        >
                          Code
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 text-center px-3 py-2 rounded text-xs lg:text-sm font-semibold transition-colors ${
                            isDarkMode
                              ? "bg-blue-600 text-white hover:bg-blue-500"
                              : "bg-blue-600 text-white hover:bg-blue-700"
                          }`}
                        >
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4">
                <a
                  href="https://github.com/Hossanna?page=2&tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-6 py-3 rounded-lg font-semibold transition-colors ${
                    isDarkMode
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  View All Projects on GitHub
                </a>
              </div>
            </Box>
          </Container>
        </section>

        {/* Experience Section */}
        <section
          data-section="experience"
          className="min-h-screen flex items-center justify-center py-8 lg:py-12 px-4 lg:px-8 animate-fade-in"
        >
          <Container maxWidth="md">
            <Box className="space-y-6 lg:space-y-8">
              <div>
                <h2
                  className={`text-2xl lg:text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-2`}
                >
                  Work Experience
                </h2>
                <hr className="w-16 h-1 bg-blue-600 mb-4 lg:mb-6" />
              </div>

              <div className="space-y-8 lg:space-y-12">
                {experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className={`relative flex items-start flex-col ${
                      animatedElements.has(`experience-${idx}`) ? "animate-fade-in" : "opacity-0"
                    }`}
                    data-animate-id={`experience-${idx}`}
                  >
                    {/* Timeline dot */}
                    <div
                      className="flex-shrink-0 w-12 lg:w-16 h-12 lg:h-16 rounded-full flex items-center justify-center text-white text-lg lg:text-2xl shadow-lg z-10 relative ml-0 lg:ml-0"
                      style={{ backgroundColor: exp.color }}
                    >
                      <WorkIcon />
                    </div>

                    {/* Content card */}
                    <div className={`flex-1 ml-6 lg:ml-8 -mt-10 lg:-mt-12 pt-8 lg:pt-12`}>
                      <div
                        className={`p-3 lg:p-6 rounded-lg shadow-lg ${
                          isDarkMode ? "bg-gray-800" : "bg-white"
                        } border-l-4`}
                        style={{ borderLeftColor: exp.color }}
                      >
                        <h3
                          className={`text-base lg:text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-1`}
                        >
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 font-semibold mb-2 text-sm lg:text-base">
                          {exp.company}
                        </p>
                        <p
                          className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-xs lg:text-sm mb-3`}
                        >
                          {exp.period}
                        </p>
                        <p
                          className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-xs lg:text-sm`}
                        >
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Box>
          </Container>
        </section>

        {/* Education Section */}
        <section
          data-section="education"
          className={`min-h-screen flex items-center justify-center py-8 lg:py-12 px-4 lg:px-8 ${isDarkMode ? "bg-gray-800" : "bg-white"} animate-fade-in`}
        >
          <Container maxWidth="md">
            <Box className="space-y-6 lg:space-y-8">
              <div>
                <h2
                  className={`text-2xl lg:text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-2`}
                >
                  Education
                </h2>
                <hr className="w-16 h-1 bg-blue-600 mb-4 lg:mb-6" />
              </div>

              <div className="space-y-8 lg:space-y-12">
                {/* Education Entry */}
                <div
                  className={`relative flex items-start flex-col ${
                    animatedElements.has("education-main")
                      ? "animate-fade-in"
                      : "opacity-0"
                  }`}
                  data-animate-id="education-main"
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-12 lg:w-16 h-12 lg:h-16 rounded-full flex items-center justify-center text-white text-lg lg:text-2xl shadow-lg z-10 relative bg-green-500">
                    <SchoolIcon />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 ml-6 lg:ml-8 -mt-10 lg:-mt-12 pt-8 lg:pt-12">
                    <div
                      className={`p-3 lg:p-6 rounded-lg shadow-lg ${
                        isDarkMode ? "bg-gray-800" : "bg-white"
                      } border-l-4 border-green-500`}
                    >
                      <h3
                        className={`text-base lg:text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-1`}
                      >
                        Bachelor of Engineering (B.Eng) – Computer Engineering
                      </h3>
                      <p className="text-green-600 font-semibold mb-2 text-sm lg:text-base">
                        Federal University of Technology, Minna
                      </p>
                      <p
                        className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-xs lg:text-sm mb-3`}
                      >
                        2016 – 2023
                      </p>
                      <p
                        className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-xs lg:text-sm`}
                      >
                        A 5-year degree with strong foundation in computer
                        architecture, data structures, and modern
                        technologies. Part of the FUT Developers Circle.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Certifications Entry */}
                <div
                  className={`relative flex items-start flex-col ${
                    animatedElements.has("certifications")
                      ? "animate-fade-in"
                      : "opacity-0"
                  }`}
                  data-animate-id="certifications"
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-12 lg:w-16 h-12 lg:h-16 rounded-full flex items-center justify-center text-white text-xl lg:text-2xl shadow-lg z-10 relative bg-blue-500">
                    🎓
                  </div>

                  {/* Content card */}
                  <div className="flex-1 ml-6 lg:ml-8 -mt-10 lg:-mt-12 pt-8 lg:pt-12">
                    <div
                      className={`p-3 lg:p-6 rounded-lg shadow-lg ${
                        isDarkMode ? "bg-gray-800" : "bg-white"
                      } border-l-4 border-blue-500`}
                    >
                      <h3
                        className={`text-base lg:text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-1`}
                      >
                        Certifications
                      </h3>
                      <p className="text-blue-600 font-semibold mb-2 text-sm lg:text-base">
                        Frontend Bootcamp - She Code Africa
                      </p>
                      <p
                        className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-xs lg:text-sm mb-3`}
                      >
                        2020
                      </p>
                      <p
                        className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-xs lg:text-sm`}
                      >
                        Comprehensive frontend development training covering
                        modern web technologies and best practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Container>
        </section>

        {/* Contact Section */}
        <section
          data-section="contact"
          className="min-h-screen flex items-center justify-center py-8 lg:py-6 px-4 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white animate-fade-in"
        >
          <Container maxWidth="md">
            <Box className="space-y-6 lg:space-y-8 text-center">
              <div>
                <h2 className="text-2xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
                <hr className="w-16 h-1 bg-white mx-auto mb-4 lg:mb-6" />
                <p className="text-sm lg:text-lg opacity-90 max-w-2xl mx-auto">
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a chat about technology and
                  development. Feel free to reach out!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-center justify-start lg:justify-center space-x-3 lg:space-x-4">
                    <div className="w-10 lg:w-12 h-10 lg:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <EmailIcon sx={{ fontSize: 20 }} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-sm lg:text-lg">Email</h3>
                      <a
                        href="mailto:hosabivan@gmail.com"
                        className="hover:underline opacity-90 text-xs lg:text-base"
                      >
                        hosabivan@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center justify-start lg:justify-center space-x-3 lg:space-x-4">
                    <div className="w-10 lg:w-12 h-10 lg:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <EmailIcon sx={{ fontSize: 20 }} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-sm lg:text-lg">Email</h3>
                      <a
                        href="mailto:hosannabivan@gmail.com"
                        className="hover:underline opacity-90 text-xs lg:text-base"
                      >
                        hosannabivan@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-center justify-start lg:justify-center space-x-3 lg:space-x-4">
                    <div className="w-10 lg:w-12 h-10 lg:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <GitHubIcon sx={{ fontSize: 20 }} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-sm lg:text-lg">GitHub</h3>
                      <a
                        href="https://github.com/Hossanna"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline opacity-90 text-xs lg:text-base"
                      >
                        github.com/Hossanna
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center justify-start lg:justify-center space-x-3 lg:space-x-4">
                    <div className="w-10 lg:w-12 h-10 lg:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <LinkedInIcon sx={{ fontSize: 20 }} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-sm lg:text-lg">LinkedIn</h3>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline opacity-90 text-xs lg:text-base"
                      >
                        linkedin.com/in/hosanna
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-xs lg:text-sm opacity-75">
                  Let's build something amazing together!
                </p>
              </div>
            </Box>
          </Container>
        </section>
      </main>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed top-2 lg:top-4 right-2 lg:right-4 z-50 p-2 lg:p-3 rounded-full shadow-xl transition-all duration-300 ${
          isDarkMode ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" : "bg-white text-gray-800 hover:bg-gray-50"
        }`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
      </button>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-2 lg:bottom-4 right-2 lg:right-4 z-50 p-2 lg:p-3 rounded-full shadow-xl transition-all duration-300 ${
          isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-gray-800 hover:bg-gray-50"
        }`}
        aria-label="Back to top"
      >
        <KeyboardArrowUpIcon fontSize="small" />
      </button>

      {/* GitHub Corner */}
      <a
        href="https://github.com/Hossanna"
        className="fixed top-0 right-0 z-40"
        aria-label="View source on GitHub"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 250 250"
          style={{ fill: "#151513", color: "#fff" }}
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    </div>
  );
}

export default App;
