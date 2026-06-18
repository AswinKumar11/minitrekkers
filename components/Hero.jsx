import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-green-deep flex flex-col items-center justify-center px-[5%] pt-24 pb-16 overflow-hidden"
    >
      <Image
        src="/gallery-3.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-green-deep/85 via-green-deep/75 to-green-deep/90" />

      <div className="relative text-center z-10 max-w-2xl">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-ochre mb-5">
          Coimbatore Based Kids Trekking Community
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
          Where little legs climb{' '}
          <em className="text-ochre not-italic">big mountains</em>
        </h1>
        <p className="text-white/70 text-lg max-w-md mx-auto mb-10 leading-relaxed">
          We take kids off screens and into the wild, exploring forests, hills
          and trails. Real fun. Real learning. Real memories.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="bg-ochre text-green-deep font-semibold px-8 py-3.5 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all"
          >
            Join the community
          </a>
          <a
            href="#about"
            className="border border-white/40 text-white font-medium px-8 py-3.5 rounded-full hover:border-ochre hover:bg-ochre/10 transition-all"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* Mountain SVG illustration */}
      <svg
        className="relative z-10 w-full max-w-3xl mt-12"
        viewBox="0 0 780 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 200 L80 100 L160 170 L240 80 L320 160 L400 60 L480 150 L560 90 L640 155 L720 75 L780 130 L780 260 L0 260 Z" fill="#5C4F47" opacity="0.35"/>
        <path d="M0 220 L60 140 L130 195 L200 120 L280 185 L360 100 L440 175 L520 115 L600 180 L670 125 L740 165 L780 145 L780 260 L0 260 Z" fill="#5C4F47" opacity="0.6"/>
        <path d="M0 240 L100 170 L190 220 L300 140 L420 210 L520 150 L640 215 L720 170 L780 200 L780 260 L0 260 Z" fill="#1b4332"/>
        <rect x="0" y="248" width="780" height="12" fill="#152E21"/>
        <g fill="#152E21">
          <polygon points="30,248 38,220 46,248"/>
          <polygon points="26,248 38,210 50,248"/>
          <polygon points="70,248 78,228 86,248"/>
          <polygon points="700,248 708,222 716,248"/>
          <polygon points="740,248 748,230 756,248"/>
        </g>
        {/* Kid 1 */}
        <g transform="translate(180,208)">
          <circle cx="0" cy="-12" r="4" fill="#f9c74f"/>
          <path d="M0,-8 L0,4" stroke="#f9c74f" strokeWidth="2" strokeLinecap="round"/>
          <path d="M0,-2 L-4,2" stroke="#f9c74f" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M0,-2 L4,2" stroke="#f9c74f" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M0,4 L-2,10" stroke="#f9c74f" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M0,4 L2,10" stroke="#f9c74f" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M4,-4 L6,10" stroke="#f9c74f" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
        </g>
        {/* Kid 2 - summit with flag */}
        <g transform="translate(300,130)">
          <circle cx="0" cy="-12" r="4" fill="#f9c74f"/>
          <path d="M0,-8 L0,4" stroke="#f9c74f" strokeWidth="2" strokeLinecap="round"/>
          <path d="M0,-2 L-5,1" stroke="#f9c74f" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M0,-2 L5,1" stroke="#f9c74f" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M0,4 L-2,10" stroke="#f9c74f" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M0,4 L2,10" stroke="#f9c74f" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M-2,-14 L-2,-22" stroke="#f9c74f" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M-2,-22 L4,-19 L-2,-16 Z" fill="#f9c74f" opacity="0.9"/>
        </g>
        {/* Kid 3 */}
        <g transform="translate(520,140)">
          <circle cx="0" cy="-12" r="4" fill="#f9c74f"/>
          <path d="M0,-8 L0,4" stroke="#f9c74f" strokeWidth="2" strokeLinecap="round"/>
          <path d="M0,-2 L-4,3" stroke="#f9c74f" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M0,-2 L4,3" stroke="#f9c74f" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M0,4 L-3,10" stroke="#f9c74f" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M0,4 L3,10" stroke="#f9c74f" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
        <circle cx="100" cy="40" r="1.5" fill="rgba(255,255,255,0.4)"/>
        <circle cx="200" cy="20" r="1" fill="rgba(255,255,255,0.3)"/>
        <circle cx="450" cy="15" r="1.5" fill="rgba(255,255,255,0.4)"/>
        <circle cx="600" cy="30" r="1" fill="rgba(255,255,255,0.3)"/>
        <circle cx="680" cy="12" r="1.5" fill="rgba(255,255,255,0.4)"/>
      </svg>
    </section>
  )
}
