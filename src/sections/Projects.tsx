
// Import your project images here
// For example:


// ✅ CORRECT PATH: Go up one folder (from 'sections' to 'src'), then into 'assets'.
import projectCinema from "../assets/cinema-website-template-for-xd.jpg";
import projectCoffee from "../assets/flat-minimal-coffee-shop-landing-page-template_23-2149239576.avif"; // Updated to match image name in screenshot
import projectFood from "../assets/flat-design-food-landing-page_23-2149138011.avif";
import projectEcom from "../assets/ecommerce-website-templates.jpg";
// Note: You must check the exact filename for projectCoffee, I used the one visible in your explorer.

// ... rest of the component
// Add more imports for your other projects as needed
// import projectPlaceholder1 from "../assets/src/assets/ecommerce-website-templates.jpg";
// import projectPlaceholder2 from "../assets/project-placeholder2.jpg";


function Projects() {
  const projects = [
    {
      title: "PE CINEMA",
      description: "Movie Booking Website",
      imageUrl: projectCinema, // Replace with actual image path
      link: "#" // Add actual project link if available
    },
    {
      title: "Tube Coffee",
      description: "Coffee Shop Website",
      imageUrl: projectCoffee, // Replace with actual image path
      link: "#"
    },
    {
      title: "Project 3 (Placeholder)",
      description: "Description for project 3",
      imageUrl: "https://via.placeholder.com/400x250?text=Project+3", // Placeholder for now
      link: "#"
    },
    {
      title: "Project 4 (Placeholder)",
      description: "Description for project 4",
      imageUrl: "https://via.placeholder.com/400x250?text=Project+4", // Placeholder for now
      link: "#"
    },
    {
      title: "Fast Food Restaurant",
      description: "Restaurant Ordering Site",
      imageUrl: projectFood, // Replace with actual image path
      link: "#"
    },
    {
      title: "ZANDO E-commerce",
      description: "Fashion E-commerce Platform",
      imageUrl: projectEcom, // Replace with actual image path
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white"> {/* Changed background to white */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-800"> {/* Adjusted header style */}
          My <span className="text-teal-500">Projects</span> {/* Changed color to teal to match image */}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted grid for more columns */}
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-102"
            >
              <div className="relative">
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Optional: Overlay for project details on hover */}
                {/*
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm">{p.description}</p>
                  </div>
                </div>
                */}
              </div>
              {/* If you want title/description below the image (like some portfolios) */}
              {/* <div className="p-4 bg-gray-50 text-gray-800">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.description}</p>
              </div> */}
            </a>

            
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;