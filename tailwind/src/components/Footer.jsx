export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-800 bg-slate-900 py-6 text-slate-400"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 text-xs sm:flex-row">
        <p>© 2025 Alantech. Visi tiesības aizsargātas.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-100">
            Privātuma politika
          </a>
          <a href="#" className="hover:text-slate-100">
            Lietošanas noteikumi
          </a>
        </div>
      </div>
    </footer>
  );
}
