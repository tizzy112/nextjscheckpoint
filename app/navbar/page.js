import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      {" "}
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://api.logo.com/api/v2/images?design=logo_5439449a-0a5c-4637-a158-2d6bdd140350&u=2024-08-20T21%3A13%3A03.341Z&format=svg&margins=166&width=1000&height=750&fit=contain" // Replace with your logo URL
                alt="Logo"
                className="h-8"
              />
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-4">
              <Link
                href="/homepage"
                className="text-gray-700 hover:text-blue-500"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-500"
              >
                Contact
              </Link>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-blue-500"
              >
                Projects
              </Link>
              <Link
                href="/skills"
                className="text-gray-700 hover:text-blue-500"
              >
                Skills
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
