import Navbar from "../navbar/page";

const Skills = () => {
  const tools = [
    {
      name: "HTML",
      description: "Markup language for creating web pages.",
      logo: "https://via.placeholder.com/40?text=HTML",
    },
    {
      name: "CSS",
      description: "Style sheet language for styling web pages.",
      logo: "https://via.placeholder.com/40?text=CSS",
    },
    {
      name: "JavaScript",
      description: "Programming language for web development.",
      logo: "https://via.placeholder.com/40?text=JS",
    },
    {
      name: "React",
      description: "JavaScript library for building user interfaces.",
      logo: "https://via.placeholder.com/40?text=React",
    },
    {
      name: "Node.js",
      description: "JavaScript runtime for server-side development.",
      logo: "https://via.placeholder.com/40?text=Node.js",
    },
    {
      name: "Express.js",
      description: "Web application framework for Node.js.",
      logo: "https://via.placeholder.com/40?text=Express",
    },
    {
      name: "MongoDB",
      description: "NoSQL database for storing application data.",
      logo: "https://via.placeholder.com/40?text=MongoDB",
    },
    {
      name: "PostgreSQL",
      description: "Relational database management system.",
      logo: "https://via.placeholder.com/40?text=Postgres",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-center mb-8">My Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
            >
              <img src={tool.logo} alt={tool.name} className="mb-4" />
              <h2 className="text-xl font-semibold">{tool.name}</h2>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
