"use client"

import { useState } from "react"
import Image from "next/image"
import "./HeroSection.css" // CSS file is already imported

// Import images
import image1 from "./images/1.jpg"
import image2 from "./images/2.jpg"
import image3 from "./images/3.jpg"

const HeroSection = () => {
  const [hoveredSection, setHoveredSection] = useState(null)

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Images */}
      <div className="fixed inset-0 z-0">
        <Image
          src={image1 || "/placeholder.svg"}
          alt="Background Image 1"
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-300 ${hoveredSection === "top-left" ? "opacity-100" : "opacity-0"}`}
        />
        <Image
          src={image2 || "/placeholder.svg"}
          alt="Background Image 2"
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-300 ${
            hoveredSection === "bottom-left" ? "opacity-100" : "opacity-0"
          }`}
        />
        <Image
          src={image3 || "/placeholder.svg"}
          alt="Background Image 3"
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-300 ${
            hoveredSection === "bottom-right" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Faded Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-5"></div>

      {/* Content */}
      <div className="box relative w-[300px] h-[300px] z-10">
        {/* Top Left Section */}
        <div
          className={`section section-rounded top-left absolute w-[48%] h-[48%] transition-all duration-300 ${
            hoveredSection === "top-left" ? "bg-transparent" : "bg-white bg-opacity-10"
          }`}
          onMouseEnter={() => setHoveredSection("top-left")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div className="w-full h-full rounded-tl-full overflow-hidden"></div>
        </div>

        {/* Bottom Left Section */}
        <div
          className={`section section-rounded bottom-left absolute w-[48%] h-[48%] transition-all duration-300 ${
            hoveredSection === "bottom-left" ? "bg-transparent" : "bg-white bg-opacity-10"
          }`}
          onMouseEnter={() => setHoveredSection("bottom-left")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div className="w-full h-full rounded-bl-full overflow-hidden"></div>
        </div>

        {/* Bottom Right Section */}
        <div
          className={`section section-rounded bottom-right absolute w-[48%] h-[48%] transition-all duration-300 ${
            hoveredSection === "bottom-right" ? "bg-transparent" : "bg-white bg-opacity-10"
          }`}
          onMouseEnter={() => setHoveredSection("bottom-right")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div className="w-full h-full rounded-br-full overflow-hidden"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

