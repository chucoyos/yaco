import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  return (
    <>
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
    </>
  )
}