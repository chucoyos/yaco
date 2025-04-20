import Image from "next/image";
import Link from "next/link";

export default function Videos() {
  return (
    <div className="relative grid grid-rows-[2px_1fr_2px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <main className="relative z-10 flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-white">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-[-.01em] text-center sm:text-left">
          Videos
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-.01em] text-center sm:text-left">
          Yaco YardContainers
        </h2>
      </main>

      <footer className="relative z-10 row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-white/80">
              <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-white"
                href="/"
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
                href="#"
              >
                <Image
                  aria-hidden
                  src="/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                  className="invert"
                />
                Screenshots
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