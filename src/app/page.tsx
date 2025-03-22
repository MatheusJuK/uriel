"use client"

import "bootstrap-icons/font/bootstrap-icons.css";
import { useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"


// Sample data - replace with your own images and descriptions
const photos = [
  {
    id: 1,
    src: "/public/foto1.jpg",
    alt: "Foto 1",
    description: "This is the first photo in the collection. It shows a beautiful landscape.",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=300&width=300",
    alt: "Photo 2",
    description: "This is the second photo. It captures a special moment with friends.",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=300&width=300",
    alt: "Photo 3",
    description: "The third photo shows an amazing sunset over the ocean.",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=300&width=300",
    alt: "Photo 4",
    description: "This is a photo from a family gathering last summer.",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=300&width=300",
    alt: "Photo 5",
    description: "A beautiful mountain landscape captured during a hiking trip.",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=300&width=300",
    alt: "Photo 6",
    description: "This photo shows the city skyline at night with all the lights.",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=300&width=300",
    alt: "Photo 7",
    description: "A candid moment captured during a birthday celebration.",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=300&width=300",
    alt: "Photo 8",
    description: "This is from the trip to the beach last year with amazing waves.",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=300&width=300",
    alt: "Photo 9",
    description: "A candid moment captured during a birthday celebration.",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=300&width=300",
    alt: "Photo 10",
    description: "This is from the trip to the beach last year with amazing waves.",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=300&width=300",
    alt: "Photo 11",
    description: "A candid moment captured during a birthday celebration.",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=300&width=300",
    alt: "Photo 12",
    description: "This is from the trip to the beach last year with amazing waves.",
  },
]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handlePhotoClick = (id: number) => {
    setSelectedPhoto(id)
  }
  // Calculate the total width needed for the photos
  const totalWidth = photos.length * 309 // 144px = 132px (photo width) + 12px (gap)

  return (
    <>
    <div className="min-h-screen text-black p-4 md:p-8" id='background'>
      <h1 className="text-3xl md:text-4xl font-bold text-center">Feliz 1 ano meu amor</h1>
      <h1 className="text-3xl md:text-4xl font-bold text-center">Escolhi 12 fotos que mostram</h1>
      <h1 className="text-3xl md:text-4xl font-bold text-center">como nosso amor é lindo</h1>
      <h1 className="text-3xl md:text-4xl font-bold text-center">EU TE AMO</h1>
      <div className="flex justify-center">
        <i className="text-3xl md:text-4xl bi bi-heart-fill"></i>
      </div>

      {/* Photo String Container */}
      <div className="relative mb-24 mt-16 overflow-hidden h-[370px] space-x-8">
        {/* Scrollable container */}
        <div ref={scrollContainerRef} className="overflow-x-auto py-8 px-4 scrollbar-hide h-[370px] max-w-[2000px]">
          <div
            className="relative flex"
            style={{ width: `${Math.max(2792, 0)}px`, minHeight: "210px" }}
            >
            {/* Curved string line using SVG */}
            <svg
              className="absolute top-[-60] left-0 w-full h-100"
              preserveAspectRatio="none"
              viewBox={`0 0 ${Math.max(totalWidth, 1000)} 100`}
              >
              <path
                d={`M0,13 C${totalWidth * 10},65 ${totalWidth * 10},65 ${totalWidth * 10},10`}
                stroke="rgb(0 0 0)"
                strokeWidth="2"
                fill="none"
                />
            </svg>

            {/* Photos */}
            <div className="flex space-x-8 relative">
              {photos.map((photo) => {
                return (
                  <div
                  key={photo.id}
                  className="relative"
                  onClick={() => handlePhotoClick(photo.id)}
                  >
                    {/* Photo frame */}
                    <div
                      className={cn(
                        "w-50 h-70 border-2 cursor-pointer transition-all duration-300",
                        selectedPhoto === photo.id
                        ? "border-white scale-120 mt-7 mx-5"
                        : "border-black hover:border-white",
                      )}
                      >
                      {/* Light bulb positioned directly on the curve */}
                      <div
                        className={cn(
                          "absolute -top-2 left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 -translate-y-1/2",
                          selectedPhoto === photo.id ? "bg-white" : "bg-black",
                        )}
                        ></div>
                      <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Photo Description */}
      {selectedPhoto && (
        <div className="max-w-2xl mx-auto mb-12 bg-gray-900/80 p-6 rounded-lg border border-amber-600">
          <div className="flex items-start gap-4">
            <div className="relative w-40 h-40 flex-shrink-0">
              <Image
                src={photos.find((p) => p.id === selectedPhoto)?.src || ""}
                alt={photos.find((p) => p.id === selectedPhoto)?.alt || ""}
                fill
                className="object-cover rounded-md"
                />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-amber-300 mb-2">
                {photos.find((p) => p.id === selectedPhoto)?.alt}
              </h2>
              <p className="text-gray-200">{photos.find((p) => p.id === selectedPhoto)?.description}</p>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center">
        <iframe src="https://open.spotify.com/embed/playlist/1g4Bekw7Xnq2AV7Md9XFZE?utm_source=generator" width="30%" height="351" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
    </>
  )
}
