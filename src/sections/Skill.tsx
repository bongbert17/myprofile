
// You will need to import your actual skill logos here.
// For example:
// import html5Logo from "../assets/logos/html5.svg";
// import css3Logo from "../assets/logos/css3.svg";
// ... and so on for all your skills.

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
  logo: string;
}

// For demonstration, I'll use placeholder icons/simple text for logos.
// You should replace these with actual imports like the commented out examples above.

const skillsData = {
  "Front-End": [
    { name: "HTML5", percentage: 85, color: "orange", logo: "https://skillicons.dev/icons?i=html" },
    { name: "CSS3", percentage: 80, color: "blue", logo: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", percentage: 70, color: "yellow", logo: "https://skillicons.dev/icons?i=js" },
    { name: "Bootstrap 5", percentage: 80, color: "purple", logo: "https://skillicons.dev/icons?i=bootstrap" },
    { name: "React Js", percentage: 70, color: "cyan", logo: "https://skillicons.dev/icons?i=react" },
    { name: "Jquery", percentage: 70, color: "blue-600", logo: "https://skillicons.dev/icons?i=jquery" },
  ],
  "Back-End": [
    { name: "PHP", percentage: 70, color: "indigo", logo: "https://skillicons.dev/icons?i=php" },
    { name: "Laravel", percentage: 80, color: "red", logo: "https://skillicons.dev/icons?i=laravel" },
    { name: "Node Js", percentage: 70, color: "green", logo: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Express Js", percentage: 70, color: "neutral-500", logo: "https://skillicons.dev/icons?i=express" },
    { name: "MySql", percentage: 80, color: "blue", logo: "https://skillicons.dev/icons?i=mysql" },
    { name: "PostgreSQL", percentage: 70, color: "sky", logo: "https://skillicons.dev/icons?i=postgresql" },
  ],
};

// Helper component to render a single skill bar
const SkillBar = ({ name, percentage, color, logo }: SkillBarProps) => {
  // Map simple colors to Tailwind CSS classes
  const colorMap = {
    orange: "bg-orange-600",
    blue: "bg-blue-600",
    yellow: "bg-yellow-400",
    purple: "bg-purple-600",
    cyan: "bg-cyan-500",
    red: "bg-red-500",
    green: "bg-green-600",
    indigo: "bg-indigo-500",
    "neutral-500": "bg-neutral-500",
    "blue-600": "bg-blue-600",
    sky: "bg-sky-700"
  };

  const barColor = colorMap[color as keyof typeof colorMap] || "bg-cyan-500"; // Default to cyan if not found

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-1">
        <span className="flex items-center gap-2 text-gray-800 font-medium text-lg"> {/* Adjusted text color for white bg */}
          {logo && <img src={logo} alt={`${name} logo`} className="w-6 h-6 object-contain" />}
          {name}
        </span>
        <span className="text-gray-800 font-medium text-lg">{percentage}%</span> {/* Adjusted text color */}
      </div>
      <div className="w-full bg-gray-300 rounded-full h-3"> {/* Changed track color for white bg */}
        <div
          className={`h-3 rounded-full transition-all duration-1000 ${barColor}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};


function Skills() {
  return (
    // Changed background to white and text to gray-800 for dark text on white background
    <section id="skills" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          My <span className="text-cyan-600">Skills</span> {/* Slightly darker cyan for contrast on white */}
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Front-End Skills Column */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-center border-b-2 border-cyan-600 pb-2"> {/* Darker cyan border */}
              Front-End
            </h3>
            {skillsData["Front-End"].map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>

          {/* Back-End Skills Column */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-center border-b-2 border-cyan-600 pb-2"> {/* Darker cyan border */}
              Back-End
            </h3>
            {skillsData["Back-End"].map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
