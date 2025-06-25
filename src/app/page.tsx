"use client";
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Users, 
  Building2, 
  UserCheck,
  Monitor,
  Code,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const slides = [
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description: "Where to grow your business as a photographer: site or social media?",
      image: "💻"
    },
    {
      title: "Community management",
      subtitle: "made simple",
      description: "Streamline your community operations with our comprehensive platform.",
      image: "👥"
    },
    {
      title: "Grow your network",
      subtitle: "effortlessly",
      description: "Connect with like-minded professionals and expand your reach.",
      image: "🌱"
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const clientLogos = [
    { name: "Client 1", icon: "🏢" },
    { name: "Client 2", icon: "🌟" },
    { name: "Client 3", icon: "⚡" },
    { name: "Client 4", icon: "🚀" },
    { name: "Client 5", icon: "💎" },
    { name: "Client 6", icon: "🎯" },
    { name: "Client 7", icon: "🔥" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Nexcent</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Home</a>
              <a href="#features" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Features</a>
              <a href="#community" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Community</a>
              <a href="#blog" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Blog</a>
              <a href="#pricing" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Pricing</a>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors font-medium flex items-center">
                Register Now
                <ArrowRight className="ml-2" size={16} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 mt-4">
                <a href="#home" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Home</a>
                <a href="#features" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Features</a>
                <a href="#community" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Community</a>
                <a href="#blog" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Blog</a>
                <a href="#pricing" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Pricing</a>
                <button className="bg-green-500 text-white px-6 py-2 rounded-md w-fit">
                  Register Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <section id="home" className="pt-20 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center min-h-[600px]">
            {/* Left Content */}
            <div className="lg:w-2/3 lg:pr-12 mb-12 lg:mb-0">
                <h1 className="text-4xl lg:text-6xl font-semibold text-gray-900 leading-[76px] mb-6">
                  {slides[currentSlide].title}
                  <span className="block text-green-500">
                    {slides[currentSlide].subtitle}
                  </span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {slides[currentSlide].description}
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Register
                </button>
            </div>

            {/* Right Illustration */}
            <div className="lg:w-1/3 relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
                {/* Monitor/Dashboard Illustration */}
                <div className="bg-gray-100 rounded-lg p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <Monitor className="text-gray-400" size={20} />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-green-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="h-16 bg-green-100 rounded flex items-center justify-center">
                        <Code className="text-green-500" size={24} />
                      </div>
                      <div className="h-16 bg-blue-100 rounded flex items-center justify-center">
                        <Settings className="text-blue-500" size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-center mt-12 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronLeft className="text-gray-600" size={20} />
            </button>
            
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronRight className="text-gray-600" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <p className="text-gray-600 mb-12">We have been working with some Fortune 500+ clients</p>
          
          <div className="grid grid-cols-3 md:grid-cols-7 gap-8 items-center justify-items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-green-50 transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {client.icon}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Management Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Manage your entire community
            <span className="block text-green-500">in a single system</span>
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Who is Nextcent suitable for?
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Membership Organizations */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Membership
                <span className="block">Organisations</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our membership management software provides full automation of 
                membership renewals and payments
              </p>
            </div>

            {/* National Associations */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Building2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                National
                <span className="block">Associations</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our membership management software provides full automation of 
                membership renewals and payments
              </p>
            </div>

            {/* Clubs And Groups */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <UserCheck className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Clubs And
                <span className="block">Groups</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our membership management software provides full automation of 
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold">N</span>
                </div>
                <span className="text-2xl font-bold">Nexcent</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Copyright © 2020 Nexcent ltd.<br />
                All rights reserved
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                  <span>📘</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                  <span>🐦</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                  <span>📷</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">About us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Contact us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Testimonials</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Help center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms of service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Legal</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}