"use client"

import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"


// Sample data - replace with your own images and descriptions
const photos = [
  {
    id: 1,
    src: "/foto1.jpg",
    alt: "Foto 1",
    description: "Nosso primeiro halloween juntos, fiquei muito feliz que você me convidou, foi muito legal esse dia.",
  },
  {
    id: 2,
    src: "/foto2.jpg",
    alt: "Foto 2",
  description: "Quando a gente ficou na área la fora do condomínio esperando seu pai(acho q foi por isso), apesar de eu não amar o ar livre, você fez ser muito legal.",
  },
  {
    id: 3,
    src: "/foto3.jpg",
    alt: "Foto 3",
    description: "Uma das nossas melhores fotos, você tá muito fofo e eu amei esse dia, foi muito divertido lá no estacionamento do shopping.",
  },
  {
    id: 4,
    src: "/foto4.jpg",
    alt: "Foto 4",
    description: "Adoro essa foto, a gente comemorando meu aniversário e da cecília, você tá MUITO fofo nessa foto vida.",
  },
  {
    id: 5,
    src: "/foto5.jpg",
    alt: "Foto 5",
    description: "Primeira vez que a gente viajou juntos, esse dia em especial foi um dos mais legais, amo como dá pra perceber o seu amor nessa foto.",
  },
  {
    id: 6,
    src: "/foto6.jpg",
    alt: "Foto 6",
    description: "Essa aqui foi na praia, tava no pôr do sol quase anoitecendo e a gente lá tirando foto.",
  },
  {
    id: 7,
    src: "/foto7.jpg",
    alt: "Foto 7",
    description: "O nosso relicário, um dos melhores presentes que eu já ganhei, pra mim é uma representação física do nosso amor.",
  },
  {
    id: 8,
    src: "/foto8.jpg",
    alt: "Foto 8",
    description: "Quando a gente foi pro halloween combinando, essa foi a melhor foto desse dia, a gente sendo boboquinha.",
  },
  {
    id: 9,
    src: "/foto9.jpg",
    alt: "Foto 9",
    description: "Quando a gente montou a árvore de natal, você ta muito fofinho nessa foto, eu te amo muito vida. Na foto 5 da pra ver seu amor, nessa eu consigo ver o meu por você",
  },
  {
    id: 10,
    src: "/foto10.jpg",
    alt: "Foto 10",
    description: "Dois gostosos tirando foto de gostoso no espelho antes de sair pro restaurante no meu aniversário.",
  },
  {
    id: 11,
    src: "/foto11.png",
    alt: "Foto 11",
    description: "Quando a gabi pintou literalmente a gente, ficou muito fofo. Eu te amo meu bem.",
  },
  {
    id: 12,
    src: "/foto12.png",
    alt: "Foto 12",
    description: "Do dia que eu lhe acompanhei no maurício, a gente tirou algumas fotos que eu acho muito bonitas la na frente do consultório e essa é uma das melhores.",
  },
]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

  const handlePhotoClick = (id: number) => {
    if (selectedPhoto == id) {
      setSelectedPhoto(null);
    }else{
      setSelectedPhoto(id)
    }
  }
  // Calculate the total width needed for the photos
  const totalWidth = photos.length * 309 // 144px = 132px (photo width) + 12px (gap)
  if (isClient) {
    let btn = document.getElementById('btn');
    let btnS = document.getElementById('btnS');
    function geraPosicao(min: number,max: number){
      return Math.random() * (max - min) + min + "%";
    }
    function showLoveMessage() {
      alert("Eu te amo meu amor, você é incrível e eu espero que tenha gostado do presente, agora a gente tem que ir no shopping pra gente fazer aquilo que eu falei que era melhor fazer juntos");
    }
    if (btn && btnS) {
      btn.addEventListener("click", function() {
        btn.style.position = "absolute";
        btn.style.bottom = geraPosicao(10,90);
        btn.style.left = geraPosicao(10,90);
      });
      btn.addEventListener("mouseover", function() {
        btn.style.position = "absolute";
        btn.style.bottom = geraPosicao(10,90);
        btn.style.left = geraPosicao(10,90);
      });
      if (!btnS.dataset.listenerAdded) {
        btnS.addEventListener("click", showLoveMessage);
        btnS.dataset.listenerAdded = "true"; // Marca que o evento foi adicionado
      }
    }
  }
  

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
                    <div
                      className={cn(
                        "absolute -top-2 left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 -translate-y-1/2",
                        selectedPhoto === photo.id ? "bg-white" : "bg-black",
                      )}
                    ></div>
                    {/* Photo frame */}
                    <div
                      className={cn(
                        "w-50 h-70 border-[4px] border-black box-border cursor-pointer transition-all duration-300 hover:border-white",
                        selectedPhoto === photo.id
                        ? "border-white scale-120 mt-7 mx-5"
                        : "scale-100",
                      )}
                      >
                      {/* Light bulb positioned directly on the curve */}
                      <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover box-content"/>
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
        <div className="max-w-[700px] mx-auto mb-12 bg-gray-900/80 p-6 rounded-lg border border-black">
          <div className="flex items-center gap-4 flex-col md:flex-row md:items-start">
            <div className="relative w-60 h-80 flex-shrink-0">
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
        <div className="flex justify-center">
          <iframe className ="h-[300px] max-w-[700px]" src="https://open.spotify.com/embed/playlist/1L0T3uocjUTl8NV9eOtvhp?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div className="flex justify-center">
          <div className="bg-[#690900] max-w-[800px] h-[300px] p-10 text-center grow relative flex flex-col gap-10 rounded-md">
            <h2 className="z-10 text-[#000] text-2xl bg-white"><i className="bi bi-heart-fill"></i>Eu te amo<i className="bi bi-heart-fill"></i></h2>
            <h1 className="z-10 text-[#000] text-2xl bg-white">Você me ama?</h1>
            <div className="flex justify-center items-center">
                <button id='btnS' className="bg-black text-white border-none p-2 w-[80px] rounded-xl">SIM</button>
                <button id="btn" className="bg-black text-white border-none p-2 w-[80px] rounded-xl z-11">NÃO</button>
            </div>
          </div>
      </div>
      </div>
    </>
  )
}
