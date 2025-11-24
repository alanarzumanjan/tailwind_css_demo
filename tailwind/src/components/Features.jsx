const features = [
  {
    title: "Reāllaika dati",
    description: "CO₂, temperatūra un mitrums katrās 10 sekundēs.",
  },
  {
    title: "Brīdinājumi",
    description:
      "Krāsu indikatori un e-pasta paziņojumi, kad sasniegts slieksnis.",
  },
  {
    title: "Vēsture un grafiki",
    description: "Pēdējo 24h, nedēļas un mēneša datu vizualizācijas.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-slate-100 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-2 text-center text-3xl font-semibold">
          Galvenās iespējas
        </h2>
        <p className="mb-10 text-center text-sm text-slate-500">
          Viss, kas nepieciešams, lai saprastu gaisa kvalitāti jūsu telpās.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl bg-white p-6 text-left shadow-lg shadow-slate-200"
            >
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
