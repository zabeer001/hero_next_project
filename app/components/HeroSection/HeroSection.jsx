"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import "./HeroSection.css"

import image1 from "./images/1.jpg"
import image2 from "./images/2.jpg"
import image3 from "./images/3.jpg"
import useOuterBlur from "../hooks/useOuterBlur"

const HeroSection = ({ className }) => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const ref = useRef(null)

  useOuterBlur(ref)

  const handleMouseEnter = (position) => {
    setHoveredSection(position)
  }

  return (
    <div id="hero-section" className={`row hero min-h-screen ${className}`}>
      <div className="min-h-screen flex items-center justify-center col-6">
        <div className="z-90">
          <h1 className="text-white text-9xl absolute left-32 top-72 notBlur">A Creative</h1>
          <h1 className="text-white text-9xl absolute left-32 notBlur">Digital Brands</h1>

        </div>

        {/* Background Images */}
        <div className="inset-0 z-0">
          <Image
            src={image1 || "/placeholder.svg"}
            alt="Background Image 1"
            layout="fill"
            // objectFit="cover"
            className={`absolute transition-opacity duration-300 ${
              hoveredSection === "top-left" ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image
            src={image2 || "/placeholder.svg"}
            alt="Background Image 2"
            layout="fill"
            objectFit="cover"
            className={`absolute transition-opacity duration-300 ${
              hoveredSection === "bottom-left" ? "opacity-50" : "opacity-0"
            }`}
          />
          <Image
            src={image3 || "/placeholder.svg"}
            alt="Background Image 3"
            layout="fill"
            objectFit="cover"
            className={`absolute transition-opacity duration-300 ${
              hoveredSection === "bottom-right" ? "opacity-50" : "opacity-0"
            }`}
          />
        </div>

        {/* Content */}
        <div className="">
          <div className="box w-[300px] h-[300px]">
            {/* Top Left Section */}
            <div
            ref={ref}
              id="tls"
              className={`section section-rounded top-left w-[48%] h-[48%] transition-all duration-300  ${
                hoveredSection === "top-left" ? "bg-transparent" : "bg-white bg-opacity-100"
              } `}
              onMouseEnter={() => setHoveredSection("top-left")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="w-full h-full rounded-tl-full overflow-hidden"></div>
            </div>

            {/* Bottom Left Section */}
            <div
              className={`section section-rounded bottom-left w-[48%] h-[48%] transition-all duration-300 ${
                hoveredSection === "bottom-left" ? "bg-transparent" : "bg-white bg-opacity-50"
              }`}
              onMouseEnter={() => setHoveredSection("bottom-left")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="w-full h-full rounded-bl-full overflow-hidden"></div>
            </div>

            {/* Bottom Right Section */}
            <div
              className={`section section-rounded bottom-right w-[48%] h-[48%] transition-all duration-300 ${
                hoveredSection === "bottom-right" ? "bg-transparent" : "bg-white bg-opacity-50"
              }`}
              onMouseEnter={() => handleMouseEnter("bottom-right")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="w-full h-full rounded-br-full overflow-hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

