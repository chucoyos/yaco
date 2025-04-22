import Image from "next/image";
import Link from "next/link";
import Video from "./components/video";
import Header from "./components/header";

export default function Home() {
  return (
    <div 
      className="relative grid grid-rows-[2px_1fr_2px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{
        backgroundImage: "url('/yaco3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
  
      <main className="relative z-10 flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-white">
        <Header />

        {/* New Video Grid Section */}
        <section className="relative z-10 w-full max-w-6xl row-start-3 px-4 sm:px-0" id="videos">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">
            Descubre cómo funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Video
               videoId="6u6uXpFyyys"
               title="Conoce Yaco YardContainers"
               description="Conoce la aplicación y funcionalidades principales de Yaco YardContainers."
               className="custom-class-if-needed"
             />
            <Video
              videoId="oOoLk0myvko"
              title="Flujo ideal de la aplicación"
              description="Describe el flujo ideal de la aplicación Yaco YardContainers."
              className="custom-class-if-needed"
            />
            <Video
              videoId="MVVR8v5-yfk"
              title="Prefacturando en YACO"
              description="Describe las opciones de prefacturación."
              className="custom-class-if-needed"
            />
          </div>
        </section>

      </main>
        <footer className="relative z-10 row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-white/80">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-white"
          href="#"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
            className="invert"
          />
          Home
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-white"
          href="#videos"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
            className="invert"
          />
          Videos
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-white"
          href="#"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            className="invert"
          />
          Ir a Yaco →
        </Link>
        </footer>
    </div>
  );
}
