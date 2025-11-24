export function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-slate-900/90 text-slate-100 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="text-lg font-bold tracking-tight">Alantech</div>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#features" className="text-slate-200 hover:text-white">
            Features
          </a>
          <a href="#pricing" className="text-slate-200 hover:text-white">
            Pricing
          </a>
          <a href="#contact" className="text-slate-200 hover:text-white">
            Contact
          </a>
        </nav>
        <a
          href="#pricing"
          className="rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-orange-500/40 hover:bg-orange-600 md:text-sm"
        >
          Get started
        </a>
      </div>
    </header>
  );
}
