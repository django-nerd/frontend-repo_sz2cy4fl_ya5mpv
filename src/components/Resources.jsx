import { Download, Star } from "lucide-react";

const items = [
  {
    id: 1,
    name: "Retrocraft UI",
    desc: "Classic pixel UI pack inspired by Alpha days.",
    rating: 4.7,
  },
  {
    id: 2,
    name: "Vibrant Shaders Lite",
    desc: "Optimized shaders for low-end PCs.",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Nature Soundscape",
    desc: "Ambient overworld sounds for immersion.",
    rating: 4.6,
  },
];

export default function Resources() {
  return (
    <section id="resources" className="max-w-7xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-bold text-emerald-100">Community Resources</h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((r) => (
          <div key={r.id} className="rounded-lg border border-emerald-800 bg-emerald-950/60 p-4">
            <h4 className="text-lg font-semibold text-emerald-100">{r.name}</h4>
            <p className="text-emerald-300/80 text-sm mt-1">{r.desc}</p>
            <div className="flex items-center gap-1 text-amber-400 mt-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill={i < Math.round(r.rating) ? "currentColor" : "none"} />
              ))}
              <span className="ml-1 text-amber-300 text-sm">{r.rating.toFixed(1)}</span>
            </div>
            <button className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-emerald-50 font-medium border border-emerald-300/20">
              <Download size={18} /> Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
