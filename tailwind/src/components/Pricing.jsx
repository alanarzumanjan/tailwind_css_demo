const plans = [
  {
    name: "Starter",
    price: "0 € / mēn.",
    popular: false,
    features: ["1 ierīce", "Pamata funkcijas", "E-pasta atbalsts"],
  },
  {
    name: "Pro",
    price: "9 € / mēn.",
    popular: true,
    features: [
      "līdz 5 ierīcēm",
      "Brīdinājumi un vēsture",
      "Priekšroka atbalstā",
    ],
  },
  {
    name: "Enterprise",
    price: "Pēc vienošanās",
    popular: false,
    features: [
      "Neierobežots ierīču skaits",
      "API integrācijas",
      "Dedicated atbalsts",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-slate-200 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-2 text-center text-3xl font-semibold">Cenu plāni</h2>
        <p className="mb-10 text-center text-sm text-slate-500">
          Izvēlieties plānu, kas atbilst jūsu telpu un komandas izmēram.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-2xl bg-white p-6 text-center shadow-lg shadow-slate-200 ${
                plan.popular ? "border border-blue-700 -translate-y-1" : ""
              }`}
            >
              {plan.popular && (
                <div className="mb-3 inline-flex self-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  Populārākais
                </div>
              )}
              <h3 className="mb-1 text-lg font-semibold">{plan.name}</h3>
              <p className="mb-4 text-xl font-bold text-blue-700">
                {plan.price}
              </p>
              <ul className="mb-6 flex-1 space-y-1 text-sm text-slate-600">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href="#"
                className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold ${
                  plan.popular
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "border border-slate-200 text-slate-900 hover:border-blue-700"
                }`}
              >
                {plan.name === "Enterprise" ? "Sazināties" : "Izvēlēties"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
