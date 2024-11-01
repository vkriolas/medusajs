import { Heading } from "@medusajs/ui"
import Image from "../../public/main-hero.jpg"

const Hero = () => {
  return (
    <div 
      className="h-[75vh] w-full border-b border-ui-border-base relative bg-cover bg-center"
      style={{ backgroundImage: `url(${Image.src})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-white font-normal"
          >
            Revive the Style, Rewrite Fashion
          </Heading>
          <Heading
            level="h3"
            className="text-3xl leading-10 text-slate-100 font-normal mt-2"
          >
            Discover unique, vintage pieces that celebrate authenticity and heritage. Let your style shine with the timeless elegance of Kriolas Vintage.
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero
