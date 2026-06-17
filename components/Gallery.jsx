import Image from 'next/image'

const photos = [
  { src: '/gallery-1.jpg', label: 'Summit day',          tall: true,  real: true },
  { src: '/gallery-2.jpg', label: 'Forest trail',         tall: false, real: true },
  { src: '/gallery-3.jpg', label: 'The whole crew',       tall: false, real: true },
  { src: '/gallery-4.jpg', label: 'Waterfall discovery',  tall: false, real: true },
  { src: '/gallery-5.jpg', label: 'Hilltop views',        tall: false, real: true },
]

// Placeholder gradient colours until real photos are added
const placeholders = [
  'from-green-deep to-green-mid',
  'from-green-mid to-green-muted',
  'from-green-deep to-green-mid',
  'from-green-mid to-green-muted',
  'from-green-deep to-green-mid',
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 px-[5%]">
      <div className="text-center max-w-xl mx-auto mb-12">
        <p className="text-xs font-semibold tracking-[2.5px] uppercase text-ochre mb-3">
          Moments from the trail
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-green-deep leading-tight mb-4">
          Every trek tells a story
        </h2>
        <p className="text-green-muted leading-relaxed">
          Glimpses from our adventures across the hills and forests of Coimbatore and beyond.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
        {photos.map((p, i) => (
          <div
            key={i}
            className={`rounded-xl overflow-hidden relative bg-gradient-to-br ${placeholders[i]} ${
              p.tall ? 'row-span-2' : 'aspect-square'
            }`}
            style={p.tall ? { aspectRatio: 'auto' } : {}}
          >
            {/* Replace bg-gradient with next/image once real photos are in /public */}
            {p.real && (
              <Image src={p.src} alt={p.label} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
            )}
            <div className="absolute inset-0 flex items-end p-3">
              <span className="text-white/80 text-xs font-semibold bg-black/20 px-2 py-1 rounded-full">
                {p.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://www.instagram.com/MiniTrekkers.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-deep text-white font-semibold px-7 py-3.5 rounded-full hover:opacity-85 transition-opacity"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="5"/>
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
          </svg>
          See more on Instagram @MiniTrekkers.in
        </a>
      </div>
    </section>
  )
}
