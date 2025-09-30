import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-black backdrop-blur-[70px] border-[2px] border-[rgba(0,0,0,0.08)] shadow-md p-4 flex justify-between">
      <h1 className="font-bold">MyApp</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
