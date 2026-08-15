import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-container py-24">
      <p className="eyebrow">Errore 404</p>
      <h1 className="mt-2 text-4xl font-semibold">Pagina non trovata</h1>
      <p className="mt-4 text-[var(--muted)]">
        La pagina richiesta non esiste oppure è stata spostata.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block font-medium text-[var(--accent)] underline underline-offset-4"
      >
        Torna alla home
      </Link>
    </section>
  );
}
