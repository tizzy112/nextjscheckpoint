import Navbar from "../navbar/page";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>
        <p className="text-lg text-center mb-4">
          Explore my skills, projects, and contact me for more information.
        </p>
        <p className="text-lg text-center mb-4">
          As a dedicated web developer, I specialize in creating responsive and
          engaging websites that provide seamless user experiences. My passion
          lies in transforming ideas into functional web applications, utilizing
          modern technologies and best practices. I am skilled in HTML, CSS,
          JavaScript, and popular frameworks, allowing me to build high-quality,
          maintainable code. I prioritize collaboration and communication to
          understand client needs, ensuring that the final product not only
          meets expectations but exceeds them. My goal is to continuously learn
          and adapt, delivering innovative solutions that stand out in today's
          digital landscape.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
