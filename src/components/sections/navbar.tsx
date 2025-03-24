import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import Logo from "@/assets/logo.svg";
import { Message } from "iconsax-react";

export function Navbar() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={Logo} alt="hustle-hive logo" className="h-12 w-auto" />
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link
          to="/"
          className="text-gray-700 hover:text-black transition-colors"
          activeProps={{
            className: "text-black font-bold",
          }}
        >
          Home
        </Link>
        <Link
          to="/e-labs-challenges"
          className="text-gray-700 hover:text-black transition-colors"
          activeProps={{
            className: "text-black font-bold",
          }}
        >
          E-Labs Challenges
        </Link>
        <Link
          to="/product"
          className="text-gray-700 hover:text-black transition-colors"
          activeProps={{
            className: "text-black font-bold",
          }}
        >
          Product
        </Link>
        <Link
          to="/gallery"
          className="text-gray-700 hover:text-black transition-colors"
          activeProps={{
            className: "text-black font-bold",
          }}
        >
          Gallery
        </Link>
      </nav>

      {/* Contact Button */}
      <Button size="lg">
        Contact Us <Message size={24} variant="Bold" color="white" />
      </Button>
    </header>
  );
}
