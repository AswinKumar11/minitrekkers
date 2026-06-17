import Image from 'next/image'

const links = ['Home', 'About', 'Gallery', 'Contact']

export default function Footer() {
  return (
    <footer className="bg-green-deep py-12 px-[5%] text-center">
      <div className="flex justify-center mb-4">
        <Image
          src="/logo.svg"
          alt="MiniTrekkers"
          width={240}
          height={70}
          className="h-40 w-auto opacity-90"
        />
      </div>

      <p className="text-green-light/70 text-sm mb-8">
        Where little legs climb big mountains &middot; Coimbatore
      </p>

      <ul className="flex justify-center flex-wrap gap-6 mb-8">
        {links.map(l => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className="text-green-light/60 text-sm hover:text-ochre transition-colors"
            >
              {l}
            </a>
          </li>
        ))}
        <li>
          <a
            href="https://www.instagram.com/MiniTrekkers.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-light/60 text-sm hover:text-ochre transition-colors"
          >
            Instagram
          </a>
        </li>
      </ul>

      <hr className="border-green-light/10 mb-6" />

      <p className="text-green-light/35 text-xs">
        &copy; {new Date().getFullYear()} MiniTrekkers, Coimbatore. All rights reserved.
      </p>
    </footer>
  )
}
