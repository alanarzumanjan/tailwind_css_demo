export function Hero() {
  return (
    <section className="py-20 text-white bg-[radial-gradient(circle_at_top_left,_#1d4ed8,_#0f172a)]">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-slate-200">
          Real-time air quality monitoring
        </p>
        <h1 className="mb-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
          Monitorē CO₂, temperatūru un mitrumu reāllaikā
        </h1>
        <p className="mb-6 max-w-2xl text-base text-slate-200 md:text-lg">
          Alantech Monitor palīdz laikus pamanīt slikta gaisa kvalitāti un
          uzlabot komfortu birojā, klasē vai mājās.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/40 hover:bg-orange-600"
          >
            Sākt bez maksas
          </a>
          <a
            href="#features"
            className="inline-flex items-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white hover:border-white"
          >
            Uzzināt vairāk
          </a>
        </div>
        <p className="mt-4 text-xs text-slate-300">
          Nav kredītkartes, nav piesaistes – tikai dati.
        </p>
      </div>
    </section>
  );
}
