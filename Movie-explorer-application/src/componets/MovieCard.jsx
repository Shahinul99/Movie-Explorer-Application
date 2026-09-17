export default function MovieCard({ show, onSeeDetails }) {
  const year = show.premiered ? show.premiered.slice(0, 4) : "N/A";
  const rating = show.rating?.average ?? "N/A";
  const poster =
    show.image?.medium ||
    "https://placehold.co/210x295/151a24/9aa1ac?text=No+Image";

  return (
    <div className="bg-[var(--surface)] border-t-[3px] border-[var(--gold)] flex flex-col overflow-hidden">
      <img src={poster} alt={show.name} className="w-full h-72 object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold mb-1 line-clamp-1">
          {show.name}
        </h3>
        <p className="text-sm text-[var(--muted)] mb-4">
          ⭐ {rating} &nbsp;•&nbsp; 📅 {year}
        </p>
        <button
          onClick={() => onSeeDetails(show)}
          className="mt-auto border border-[var(--gold)]/60 text-[var(--gold)] rounded-sm py-2 text-sm font-semibold hover:bg-[var(--gold)] hover:text-[var(--bg)] transition-colors"
        >
          See Details
        </button>
      </div>
    </div>
  );
}
