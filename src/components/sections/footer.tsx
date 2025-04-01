import Logo from "@/assets/logo.svg";
import { Link } from "@tanstack/react-router";
import { Call, Instagram, Location, Youtube } from "iconsax-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img src={Logo} alt="hustle-hive logo" className="h-12 w-auto" />
            </div>
            <p className="text-sm text-gray-300 mb-6 max-w-xs">
              We are students of the African Leadership University united by a
              joint mission to solve the problem of job creation through
              agriculture.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/hustlehive_alu/"
                target="_blank"
                className="text-white hover:text-gray-300"
              >
                <div className="w-6 h-6 border bg-white text-black rounded-sm  flex items-center justify-center">
                  <span className="sr-only">Instagram</span>
                  <Instagram size={16} variant="Outline" color="black" />
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@HustleHive_ALU"
                className="text-white hover:text-gray-300"
              >
                <div className="w-6 h-6 border bg-white text-black rounded-sm  flex items-center justify-center">
                  <span className="sr-only">Youtube</span>
                  <Youtube size={16} variant="Outline" color="black" />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/e-labs-challenges" className="hover:text-white">
                  E-Labs
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Project */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-medium mb-4">Project</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/product" className="hover:text-white">
                  BeSnacks
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Call size={16} variant="Bold" color="white" />
                <a href="tel:+250795613513">+250795613513</a>
              </li>
              <li className="flex items-center gap-2">
                <Location size={18} variant="Bold" color="white" />
                <span>
                  Bumbogo, Kigali Innovation City, Next to Azam, Kigali, Rwanda
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
