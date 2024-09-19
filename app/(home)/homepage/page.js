import Navbar from "@/app/navbar/page";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        <h1 className="text-4xl font-bold mb-8">Welcome to My Portfollio</h1>
        <p className="text-lg text-center mb-4">
          Explore my skills, projects, and contact me for more information.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
