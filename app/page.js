import Image from "next/image";
import Link from "next/link";

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
        <h1 className="text-4xl sm:text-5xl font-bold tracking-[-.01em] text-center sm:text-left">
          Yaco YardContainers
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-.01em] text-center sm:text-left">
          Gestiona tu patio de contenedores.
        </h2>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] text-white/90">
          <li className="tracking-[-.01em]">
            Asigna y controla la ubicación de cada contenedor.
          </li>
          <li className="tracking-[-.01em]">
            Genera EIR con Código QR.
          </li>
          <li className="tracking-[-.01em]">
            Genera servicios de manera automática.
          </li>
          <li className="tracking-[-.01em]">
            Genera estados de cuenta de manera automática.
          </li>
          <li className="tracking-[-.01em]">
            Asigna línea de crédito a tus clientes.
          </li>
          <li className="tracking-[-.01em]">
            Notificaciones en tiempo real.
          </li>
          <li className="tracking-[-.01em]">
            Exporta reportes a Excel y mucho más.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-white text-black gap-2 hover:bg-gray-200 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://wa.me/523141352209?text=Estoy%20interesado%20en%20la%20aplicación%20Yaco%20YardContainers"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contratar
          </a>
          <a
            className="rounded-full border border-solid border-white transition-colors flex items-center justify-center hover:bg-white/10 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px] text-white"
            href="https://wa.me/523141352209?text=Estoy%20interesado%20en%20la%20aplicación%20Yaco%20YardContainers"
            target="_blank"
            rel="noopener noreferrer"
          >
            Información
          </a>
        </div>

        {/* New Video Grid Section */}
  <section className="relative z-10 w-full max-w-6xl row-start-3 px-4 sm:px-0" id="videos">
    <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">
      Descubre cómo funciona
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Video 1 */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20">
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/6u6uXpFyyys"
            title="Conoce Yaco YardContainers"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">Conoce Yaco YardContainers</h3>
          <p className="text-white/80 text-sm">Conoce la aplicación y funcionalidades principales de Yaco YardContainers.</p>
        </div>
      </div>

      {/* Video 2 */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20">
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/oOoLk0myvko"
            title="Flujo ideal de la aplicación"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">Flujo ideal de la aplicación</h3>
          <p className="text-white/80 text-sm">Describe el flujo ideal de la aplicación Yaco YardContainers.</p>
        </div>
      </div>

      {/* Video 3 */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20">
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/MVVR8v5-yfk"
            title="Prefacturando en YACO"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">Prefacturando en YACO</h3>
          <p className="text-white/80 text-sm">Describe las opciones de prefacturación.</p>
        </div>
      </div>
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
