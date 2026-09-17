export default function Footer() {
  return (
    <footer className="bg-[var(--surface)] border-t border-white/5 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-display text-base">🎬 MovieExplorer</p>
        <p className="text-[var(--muted)]">
          © 2026 MovieExplorer. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
