// pages/projects/index.js
import Link from "next/link";
import Navbar from "@/app/navbar/page";
const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Project One",
      description: "Description of Project One",
      image:
        "https://dutumgroup.com/wp-content/uploads/2019/04/buildings-1B.jpg",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Description of Project Two",
      image:
        "https://dutumgroup.com/wp-content/uploads/2019/04/rga-road-aerial.jpg",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Description of Project Three",
      image:
        "https://gomycodelearn.blob.core.windows.net/assets/images/general/gomycodeLogo.svg",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              <Link
                href={`/projects/${project.id}`}
                className="mt-auto text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
