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
            Controla cada movimiento.
          </li>
          <li className="tracking-[-.01em]">
            Genera EIR con Código QR.
          </li>
          <li className="tracking-[-.01em]">
            Asigna y controla la ubicación de cada contenedor.
          </li>
          <li className="tracking-[-.01em]">
            Genera estados de cuenta de manera automática.
          </li>
          <li className="tracking-[-.01em]">
            Asigna línea de crédito a tus clientes.
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
          Ver más
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-white"
          href="/videos"
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
