import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <p>&copy; 2021 Tailwind CSS</p>
                <nav>
                    <NavLink to="/" className="p-2">Home</NavLink>
                    <NavLink to="/about" className="p-2">About</NavLink>
                    <NavLink to="/services" className="p-2">Services</NavLink>
                    <NavLink to="/contact" className="p-2">Contact</NavLink>
                </nav>
            </div>
        </footer>
    )
}