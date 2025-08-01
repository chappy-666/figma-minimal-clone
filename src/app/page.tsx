"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowRight,
  Users,
  Building2,
  CalendarDays,
  CreditCard,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description:
        "Where to grow your business as a photographer: site or social media?",
      image: "💻",
    },
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description:
        "Where to grow your business as a photographer: site or social media?",
      image: "💻",
    },
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description:
        "Where to grow your business as a photographer: site or social media?",
      image: "💻",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const clientLogos = [
    { name: "Client 1", icon: "🏢" },
    { name: "Client 2", icon: "🌟" },
    { name: "Client 3", icon: "⚡" },
    { name: "Client 4", icon: "🚀" },
    { name: "Client 5", icon: "💎" },
    { name: "Client 6", icon: "🎯" },
    { name: "Client 7", icon: "🔥" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`w-full z-50  bg-white `}>
        <div className="mx-auto px-[100px] py-4 w-[1000px]">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="flex justify-center items-center bg-mini-500 rounded w-8 h-8">
                <span className="font-bold text-white text-sm">N</span>
              </div>
              <span className="font-bold text-gray-900 text-2xl">Nexcent</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 text-[11px]">
              <a
                href="#home"
                className="font-medium text-gray-700 hover:text-mini-500 transition-colors"
              >
                Home
              </a>
              <a
                href="#features"
                className="font-medium text-gray-700 hover:text-mini-500 transition-colors"
              >
                Features
              </a>
              <a
                href="#community"
                className="font-medium text-gray-700 hover:text-mini-500 transition-colors"
              >
                Community
              </a>
              <a
                href="#blog"
                className="font-medium text-gray-700 hover:text-mini-500 transition-colors"
              >
                Blog
              </a>
              <a
                href="#pricing"
                className="font-medium text-gray-700 hover:text-mini-500 transition-colors"
              >
                Pricing
              </a>
              <button className="flex items-center bg-mini-500 hover:bg-mini-600 px-6 py-2 rounded-md font-medium text-white transition-colors">
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
            <div className="md:hidden mt-4 pb-4 border-gray-200 border-t">
              <div className="flex flex-col space-y-4 mt-4">
                <a
                  href="#home"
                  className="font-medium text-gray-700 hover:text-mini-500 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="font-medium text-gray-700 hover:text-mini-500 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#community"
                  className="font-medium text-gray-700 hover:text-mini-500 transition-colors"
                >
                  Community
                </a>
                <a
                  href="#blog"
                  className="font-medium text-gray-700 hover:text-mini-500 transition-colors"
                >
                  Blog
                </a>
                <a
                  href="#pricing"
                  className="font-medium text-gray-700 hover:text-mini-500 transition-colors"
                >
                  Pricing
                </a>
                <button className="bg-mini-500 px-6 py-2 rounded-md w-fit text-white">
                  Register Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <section id="home" className="bg-gray-50 py-[67px] h-[416px]">
        <div className="mx-auto px-[100px] w-[1000px]">
          <div className="flex flex-row justify-between items-center">
            {/* Left Content */}
            <div className="lw-[457px]">
              <h1 className="font-semibold text-[44.55px]">
                {slides[currentSlide].title}
                <span className="block text-mini-500">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="mt-[11px] text-[11px] leading-[16.7px] tracking-wider">
                {slides[currentSlide].description}
              </p>
              <button className="bg-mini-500 hover:bg-mini-600 mt-[22px] px-6 py-3 rounded-md font-semibold text-[11px] text-white text-base">
                Register
              </button>
            </div>

            {/* Right Illustration */}
            <div className="relative ml-[72px]">
              <Image
                src="/ui_ux_conversation.png"
                alt="Pixelgrade Story"
                width={260}
                height={0}
                className="w-[272px] h-auto"
                style={{ height: "auto" }}
                priority
              />
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-mini-500" : "bg-gray-300"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-white mt-[28px] h-[133px]">
        <div className="mx-auto w-[1000px] text-center">
          <h2 className="font-semibold text-[#4D4D4D] text-[25px]">
            Our Clients
          </h2>
          <p className="mb-[11px] text-[#717171] text-[11px] leading-[16.7px] tracking-wider">
            We have been working with some Fortune 500+ clients
          </p>

          <div className="flex justify-between items-center mx-auto w-[800px] h-[68px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src="/ui_ux_conversation.png"
                alt="Pixelgrade Story"
                width={33}
                height={33}
                className="w-[33px] h-[33px]"
                priority
              />
            ))}
          </div>
        </div>
      </section>

      {/* Community Management Section */}
      <section className="flex flex-row justify-center items-center bg-white mx-auto mt-[28px] px-[100px] w-[1000px] h-[291px]">
        <div className="mx-auto w-[800px] text-center">
          <h2 className="font-semibold text-[#4D4D4D] text-[25px]">
            Manage your entire community
            <span className="block">in a single system</span>
          </h2>
          <p className="mb-[11px] text-[#717171] text-[11px] leading-[16.7px] tracking-wider">
            Who is Nextcent suitable for?
          </p>

          <div className="flex flex-row justify-between items-center mt-[10px]">
            {/* Membership Organizations */}
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="group shadow-sm px-[22px] py-[17px] rounded-lg w-[208px] h-[182px] text-center"
              >
                <div className="flex justify-center items-center mx-auto mb-[11px] rounded-full transition-colors">
                  <Users className="w-[45px] h-[40px]" />
                </div>
                <h3 className="flex flex-col justify-center items-center mb-[6px] font-bold text-[#4D4D4D] text-[19px]">
                  <span>Membership</span>
                  <span>Organisations</span>
                </h3>
                <p className="w-[174px] text-[#717171] text-[9px]">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pixelgrade Story Section */}
      <section className="flex flex-row justify-between items-center mx-auto mt-[28px] px-[100px] w-[1000px] h-[301px]">
        <div className="flex justify-between items-center mx-auto w-[800px]">
          {/* Left Illustration */}
          <Image
            src="/ui_ux_conversation.png"
            alt="Pixelgrade Story"
            width={260}
            height={0}
            className="w-[307px] h-[217px]"
            priority
          />
          {/* Right Text */}
          <div className="w-[460px] h-[188px">
            <h2 className="mb-[11px] font-bold text-[25px] tracking-wide">
              The unseen of spending three
              <br />
              years at Pixelgrade
            </h2>
            <p className="mb-[22px] text-[#717171] text-[9px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="bg-mini-500 hover:bg-mini-600 px-6 py-3 rounded-md font-semibold text-white text-sm md:text-base transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="flex flex-row justify-between items-center bg-gray-100 mx-auto mt-[33px] py-[25px] w-full h-[202px]">
        <div className="flex flex-row justify-between items-center mx-auto px-[100px] w-[1000px]">
          <div className="w-[376px] h-[85px] text-left">
            <div className="font-semibold text-[#4D4D4D] text-[25px]">
              Helping a local
            </div>
            <div className="mb-[6px] font-bold text-[25px] text-mini-500">
              business reinvent itself
            </div>
            <div className="text-[#717171] text-[11px]">
              We reached here with our hard work and dedication
            </div>
          </div>

          <div className="gap-y-[28px] grid grid-cols-2 w-[376px] h-[114px]">
            <div className="flex flex-row items-center w-[176px]">
              <Users className="mr-[11px] w-[33px] h-[33px] text-mini-500" />
              <div>
                <p className="font-bold text-[#4D4D4D] text-[19px]">
                  2,245,341
                </p>
                <p className="text-[#717171] text-[11px]">Members</p>
              </div>
            </div>
            <div className="flex flex-row items-center w-[176px]">
              <Building2 className="mr-[11px] w-[33px] h-[33px] text-mini-500" />
              <div>
                <p className="font-bold text-[#4D4D4D] text-[19px]">46,328</p>
                <p className="text-[#717171] text-[11px]">Clubs</p>
              </div>
            </div>
            <div className="flex flex-row items-center w-[176px]">
              <CalendarDays className="mr-[11px] w-[33px] h-[33px] text-mini-500" />
              <div>
                <p className="font-bold text-[#4D4D4D] text-[19px]">828,867</p>
                <p className="text-[#717171] text-[11px]">Event Bookings</p>
              </div>
            </div>
            <div className="flex flex-row items-center w-[176px]">
              <CreditCard className="mr-[11px] w-[33px] h-[33px] text-mini-500" />
              <div>
                <p className="font-bold text-[#4D4D4D] text-[19px]">
                  1,926,436
                </p>
                <p className="text-[#717171] text-[11px]">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="flex flex-row justify-between items-center mx-auto mt-[33px] py-[25px] w-full">
        <div className="flex flex-row justify-between items-center mx-auto px-[100px] w-[1000px]">
          <div className="flex justify-center md:w-2/5">
            <Image
              src="/secure_login_style.png"
              alt="Pixelgrade Story"
              width={260}
              height={0}
              className="w-[307px] h-[301px]"
              style={{ height: "auto" }}
              priority
            />
          </div>
          <div className="w-[418px]">
            <h2 className="mb-[11px] font-semibold text-[#4D4D4D] text-[25px] tracking-wide">
              How to design your site footer like we did
            </h2>
            <p className="mb-[22px] w-[418px] text-[#717171] text-[9px] leading-relaxed">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt <br /> molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at <br /> libero
              ultrices mollis. In hac habitasse platea dictumst. Vivamus
              vehicula leo dui, at porta <br /> nisi facilisis finibus. In
              euismod augue vitae nisi ultricies, non aliquet urna tincidunt.
              Integer <br /> in nisi eget nulla commodo faucibus efficitur quis
              massa. Praesent felis est, finibus et nisi <br /> ac, hendrerit
              venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
            <button className="bg-mini-500 hover:bg-mini-600 px-6 py-3 rounded-md font-semibold text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="flex flex-row justify-between items-center mx-auto mt-[33px] py-[25px] w-full">
        <div className="flex flex-row justify-between items-center mx-auto px-[100px] w-[1000px]">
          <div className="flex justify-center items-center mb-8 w-1/3">
            <Image
              src="/futuristic.png"
              alt="Pixelgrade Story"
              width={260}
              height={0}
              className="w-[226px] h-[226px]"
              style={{ height: "auto" }}
              priority
            />
          </div>
          <div className="w-[520px]">
            <p className="mb-[11.14px] text-[#717171] text-[9px]">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <div className="mb-2 font-bold text-[14px] text-mini-500 text-xl">
              Tim Smith
            </div>
            <p className="text-[#717171] text-[11px]">
              British Dragon Boat Racing Association
            </p>
            {/* Client logos again */}
            <div className="flex flex-wrap justify-between gap-6 mt-8">
              {clientLogos.map((client, i) => (
                <div key={i} className="text-2xl">
                  {client.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Caring */}
      <section className="flex flex-row justify-between items-center mx-auto mt-[33px] w-full">
        <div className="flex flex-col justify-between items-center mx-auto w-[1000px]">
          <h2 className="mx-auto mb-[6px] w-[772px] font-semibold text-[#4D4D4D] text-[25px] text-center tracking-wide">
            Caring is the new marketing
          </h2>
          <div className="mb-[11px] w-[437px] text-[#717171] text-[11px] text-center">
            The Nextcent blog is the best place to read about the latest
            membership insights, <br /> trends and more. See who&apos;s joining
            the community, read about how our community <br /> are increasing
            their membership income and lot&apos;s more .
          </div>
          <div className="grid grid-cols-3">
            {/* Membership Organizations */}
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/secure_login_style.png"
                alt="Pixelgrade Story"
                width={256}
                height={256}
                className="w-[256px] h-auto"
                style={{ height: "auto" }}
                priority
              />
              <div className="-top-[67px] relative flex flex-col justify-center bg-netural-silver shadow-md p-[11px] py-4 rounded-xl w-[220px]">
                <div className="mb-[11px] w-[198px] font-semibold text-[#4D4D4D] text-[14px] text-center">
                  Creating Streamlined Safeguarding Processes with OneRen
                </div>
                <button className="flex items-center mx-auto rounded-md font-bold text-mini-500 text-center transition-colors">
                  Register Now
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>

            {/* National Associations */}
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/secure_login_style.png"
                alt="Pixelgrade Story"
                width={256}
                height={256}
                className="w-[256px] h-auto"
                style={{ height: "auto" }}
                priority
              />
              <div className="-top-[67px] relative flex flex-col justify-center bg-netural-silver shadow-md p-[11px] py-4 rounded-xl w-[220px]">
                <div className="mb-[11px] w-[198px] font-semibold text-[#4D4D4D] text-[14px] text-center">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </div>
                <button className="flex items-center mx-auto rounded-md font-bold text-mini-500 text-center transition-colors">
                  Register Now
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>

            {/* Clubs And Groups */}
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/secure_login_style.png"
                alt="Pixelgrade Story"
                width={256}
                height={256}
                className="w-[256px] h-auto"
                style={{ height: "auto" }}
                priority
              />
              <div className="-top-[67px] relative flex flex-col justify-center bg-netural-silver shadow-md p-[11px] py-4 rounded-xl w-[220px]">
                <div className="mb-[11px] w-[198px] font-semibold text-[#4D4D4D] text-[14px] text-center">
                  Revamping the Membership Model with Triathlon Australia
                </div>
                <button className="flex items-center mx-auto rounded-md font-bold text-mini-500 text-center transition-colors">
                  Register Now
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pellentesque Section */}
      <section>
        <div className="flex flex-col gap-12 bg-netural-silver py-8">
          <div className="w-full font-semibold text-[44px] text-center leading-[44px]">
            Pellentesque suscipit <br />
            fringilla libero eu.
          </div>
          <div className="flex justify-center w-full">
            <button className="flex items-center bg-mini-500 hover:bg-mini-600 hover:shadow-lg mx-auto px-4 py-3 rounded-md font-semibold text-white text-sm md:text-base hover:scale-105 transition-all">
              Get a Demo
              <ArrowRight className="ml-2" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 text-white">
        <div className="mx-auto px-6 max-w-7xl">
          <div className="gap-8 grid md:grid-cols-4">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex justify-center items-center bg-mini-500 rounded w-10 h-10">
                  <span className="font-bold text-white">N</span>
                </div>
                <span className="font-bold text-2xl">Nexcent</span>
              </div>
              <p className="mb-6 text-gray-400 leading-relaxed">
                Copyright © 2020 Nexcent ltd.
                <br />
                All rights reserved
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <div className="flex justify-center items-center bg-gray-800 hover:bg-mini-500 rounded-full w-10 h-10 transition-colors cursor-pointer">
                  <span>📘</span>
                </div>
                <div className="flex justify-center items-center bg-gray-800 hover:bg-mini-500 rounded-full w-10 h-10 transition-colors cursor-pointer">
                  <span>🐦</span>
                </div>
                <div className="flex justify-center items-center bg-gray-800 hover:bg-mini-500 rounded-full w-10 h-10 transition-colors cursor-pointer">
                  <span>📷</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="mb-6 font-semibold">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-mini-400 transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-mini-400 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-mini-400 transition-colors"
                  >
                    Contact us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-mini-400 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-mini-400 transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="mb-6 font-semibold">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-mini-400 transition-colors"
                  >
                    Help center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-mini-400 transition-colors"
                  >
                    Terms of service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-mini-400 transition-colors"
                  >
                    Legal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-mini-400 transition-colors"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-mini-400 transition-colors"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
