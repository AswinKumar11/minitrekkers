const TESTIMONIALS = [
  { quote: 'It was a completely different experience from what I had expected, and it truly showed me what a real trek is all about. Yes, I struggled at times, but I made it through with the support and encouragement of our fellow trekkers. This was my first trek. The stay and food arrangements were very comfortable and well organized too. There are not much flaws. Still I would encourage them to arrange more trekking like this. Will try to be a part!!!' },
  { quote: 'It was an amazing trek. The guides were friendly and it was well organised.' },
  { quote: 'Taking kids along, it was so reassuring to see that 4 to 5 co-ordinators were available all the time. Well done. Please maintain this for kids treks.' },
  { quote: 'The idea of just some strangers coming together and going on a trek was totally unusual for me! I tried calling people to join me, but something when I spoke with Vershini made me feel that this is a safe group! Surya, with her down to earth personality, gave entertainment all through the way and, most importantly, gave practical tips to stay safe on the trek. The simple idea of paying for your own food and transportation, the organizers assuring safe travel at a minimal cost, and bringing a group of people together in a nature based activity is amazing!! I tested my perseverance and physical endurance, and returned home with the joy of completing a challenging hike! Kudos to the team who plan these treks!' },
  { quote: 'Kids enjoyed it. It was a fully packed trip, the leaders have superb knowledge about the place and it gave us a lot of trust and confidence. A notable point while returning was the wise call to take a different route to avoid a time crunch, which was justified once we completed the trek. We definitely won’t miss the next trips.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24 px-[5%]">
      <div className="text-center max-w-xl mx-auto mb-12">
        <p className="text-xs font-semibold tracking-[2.5px] uppercase text-ochre mb-3">
          Loved by little trekkers
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-green-deep leading-tight mb-4">
          What parents say
        </h2>
        <p className="text-green-muted leading-relaxed">
          Stories from the families who climb big mountains with us.
        </p>
      </div>

      <div className="group relative overflow-hidden max-w-6xl mx-auto [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex gap-5 w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <figure key={i} className="flex flex-col w-[320px] md:w-[380px] shrink-0 bg-green-light rounded-2xl p-6">
              <div className="text-ochre text-lg mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <blockquote className="text-sm text-black leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-auto font-semibold text-sm text-green-deep">
                Anonymous trekker
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
