export default function SearchBar({ value, onChange }) {
  return (
    <div className="max-w-xl mx-auto mb-10">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="🔍 Search for a movie..."
        className="w-full px-5 py-3 rounded-sm bg-[var(--surface)] border border-white/10 text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
      />
    </div>
  );
}
