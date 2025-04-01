import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import Logo from "@/assets/logo.svg";
import { Message } from "iconsax-react";

export function Navbar() {
  return (
    <header className="fixed z-10 h-20 left-0 right-0 container mx-auto px-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={Logo} alt="hustle-hive logo" className="h-12 w-auto" />
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center space-x-8 bg-[#FFF] px-4 rounded-md">
        <Link
          to="/"
          className="py-2 text-gray-700 hover:text-black transition-colors"
          activeProps={{
            className: "text-black font-bold",
          }}
        >
          Home
        </Link>
        <Link
          to="/e-labs-challenges"
          className="py-2 text-gray-700 hover:text-black transition-colors"
          activeProps={{
            className: "text-black font-bold",
          }}
        >
          E-Labs Challenges
        </Link>
        <Link
          to="/product"
          className="py-2 text-gray-700 hover:text-black transition-colors"
          activeProps={{
            className: "text-black font-bold",
          }}
        >
          Product
        </Link>
        <Link
          to="/gallery"
          className="py-2 text-gray-700 hover:text-black transition-colors"
          activeProps={{
            className: "text-black font-bold",
          }}
        >
          Gallery
        </Link>
      </nav>

      {/* Contact Button */}
      <ContactButton />
    </header>
  );
}

import type React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactButton() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto URL with form data
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Message from ${name} (${email}):\n\n${message}`
    );
    const mailtoUrl = `mailto:hustlehive.alu@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoUrl;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">
          Contact Us <Message size={24} variant="Bold" color="white" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get in touch</DialogTitle>
          <DialogDescription>
            Fill out the form below and I'll get back to you as soon as
            possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your-email@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message here..."
                className="min-h-[100px]"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Send Message</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
