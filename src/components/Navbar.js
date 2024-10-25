import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
}

export default Navbar;
