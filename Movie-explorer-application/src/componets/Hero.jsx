import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="flex-1 flex flex-col">
      <div className="film-strip" />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32 bg-gradient-to-b from-[var(--bg)] to-[var(--surface)]">
        <h1 className="font-display text-5xl sm:text-7xl font-semibold tracking-tight mb-6">
          Discover Movies
        </h1>
        <p className="max-w-xl text-[var(--muted)] text-lg mb-10 leading-relaxed">
          Step into the theatre. Browse thousands of shows and films from around
          the world, and find exactly what to watch tonight.
        </p>
        <Link
          to="/movies"
          className="bg-[var(--gold)] text-[var(--bg)] font-semibold px-8 py-3 rounded-sm text-lg hover:brightness-110 transition"
        >
          Explore Now
        </Link>
      </div>
      <div className="film-strip" />
    </section>
  );
}
