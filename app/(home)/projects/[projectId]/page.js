// pages/projects/[projectId].js
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../navbar/page";

const Project = () => {
  const { projectId } = useParams();

  const projectsData = {
    1: {
      title: "Project One",
      description: "Detailed description of Project One.",
      image: "https://via.placeholder.com/600?text=Project+One",
    },
    2: {
      title: "Project Two",
      description: "Detailed description of Project Two.",
      image: "https://via.placeholder.com/600?text=Project+Two",
    },
    3: {
      title: "Project Three",
      description: "Detailed description of Project Three.",
      image: "https://via.placeholder.com/600?text=Project+Three",
    },
  };

  const project = projectsData[projectId];

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <img
          src={project.image}
          alt={project.title}
          className="mb-4 h-72 w-full object-cover rounded-lg"
        />
        <p className="text-lg text-gray-700">{project.description}</p>
        <Link
          href="/projects"
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          Back to Projects
        </Link>
      </div>
    </>
  );
};

export default Project;
