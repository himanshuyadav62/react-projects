import { Link, NavLink } from "react-router-dom";

export default function Header(){
    return (
        <header className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">Tailwind CSS</Link>
                <nav>
                    <NavLink to="/" className={({ isActive }) => isActive ? "p-2 text-blue-500" : "p-2"}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "p-2 text-blue-500" : "p-2"}>About</NavLink>
                    <NavLink to="/github" className={({ isActive }) => isActive ? "p-2 text-blue-500" : "p-2"}>Github</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "p-2 text-blue-500" : "p-2"}>Contact</NavLink>
                </nav>
            </div>
        </header>
    )
}