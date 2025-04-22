export default function Header() {
  return (
    <section className="flex flex-col gap-8">
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
    </section>
  );
}