import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[var(--surface)] sticky top-0 z-40 border-b border-white/5">
      <Link
        to="/"
        className="font-display text-xl font-semibold tracking-wide flex items-center gap-2"
      >
        🎬 MovieExplorer
      </Link>

      <div className="flex items-center gap-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `text-sm transition-colors ${isActive ? "text-[var(--gold)]" : "text-[var(--muted)] hover:text-[var(--text)]"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `px-4 py-2 text-sm font-semibold rounded-sm border transition-colors ${
              isActive
                ? "bg-[var(--gold)] text-[var(--bg)] border-[var(--gold)]"
                : "border-[var(--gold)]/60 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg)]"
            }`
          }
        >
          Movies
        </NavLink>
      </div>
    </nav>
  );
}
