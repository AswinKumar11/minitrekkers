import Image from 'next/image'

const values = [
  { icon: '🏔️', title: 'Real Exploration',  desc: 'Trails around forests and hills, not a theme park.'          },
  { icon: '🛡️', title: 'Safety First',       desc: 'Trained guides, age-appropriate routes, proper gear.'        },
  { icon: '🌿', title: 'Nature Learning',    desc: 'Kids learn about plants, birds and ecosystems every trek.'   },
  { icon: '🤝', title: 'Community',          desc: 'A warm group of parents, kids, and nature lovers.'           },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-[5%]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <p className="text-xs font-semibold tracking-[2.5px] uppercase text-ochre mb-3">Who we are</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-black leading-tight mb-5">
            Getting kids out of home and into the wild
          </h2>
          <p className="text-black leading-relaxed mb-4">
            MiniTrekkers is a Coimbatore-based community that organises safe, fun-filled treks
            for children. We believe nature is the best classroom, every trail teaches something
            a screen never can.
          </p>
          <p className="text-black leading-relaxed">
            From gentle forest walks to exciting hill climbs, our treks are designed for curious
            young minds. Our trained guides ensure every child returns home safe, happy, and inspired.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {values.map((v) => (
              <div key={v.title} className="bg-green-light rounded-2xl p-4">
                <div className="text-2xl mb-2">{v.icon}</div>
                <div className="font-semibold text-sm text-black mb-1">{v.title}</div>
                <div className="text-xs text-black leading-relaxed">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
            <Image
              src="/trek-kids.jpg"
              alt="MiniTrekkers kids on trail"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 md:bottom-[-16px] md:right-[-16px] bg-ochre rounded-2xl px-5 py-4 max-w-[180px]">
            <div className="font-display text-3xl font-bold text-black leading-none">100%</div>
            <div className="text-xs font-semibold text-black/75 mt-1">Safe. Every trek, every child.</div>
          </div>
        </div>

      </div>
    </section>
  )
}
