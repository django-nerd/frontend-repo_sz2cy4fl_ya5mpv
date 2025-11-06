import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full bg-gradient-to-b from-emerald-900 via-emerald-950 to-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qe3r2xk9eLNKM2xw/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-emerald-950/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col items-start justify-end pb-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-emerald-100 drop-shadow">
          Welcome to BlockTalk
        </h2>
        <p className="mt-3 text-emerald-200/90 max-w-xl">
          A cozy forum for redstone tinkerers, builders, speedrunners and casual
          miners. Jump into a random chat, share your builds, and find resource
          packs and seeds curated by the community.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#chat" className="px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-emerald-50 font-semibold border border-emerald-300/20 shadow">
            Start Chat Roulette
          </a>
          <a href="#forum" className="px-4 py-2 rounded-md bg-emerald-800/60 hover:bg-emerald-700/60 text-emerald-100 font-semibold border border-emerald-300/20">
            Explore Forum
          </a>
        </div>
      </div>
    </section>
  );
}
