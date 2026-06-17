const stats = [
  { num: '10+',  label: 'Treks Completed' },
  { num: '50+', label: 'Kids Explored'   },
  { num: '10+',  label: 'Trails Covered'  },
  { num: '3+',   label: 'Years Running'   },
]

export default function Stats() {
  return (
    <div className="bg-ochre flex flex-wrap justify-center">
      {stats.map((s, i) => (
        <div
          key={i}
          className="flex-1 min-w-[140px] max-w-[200px] text-center px-6 py-6 border-r border-green-deep/20 last:border-r-0"
        >
          <div className="font-display text-3xl font-bold text-green-deep leading-none">
            {s.num}
          </div>
          <div className="text-xs font-semibold tracking-widest uppercase text-green-mid mt-1">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
