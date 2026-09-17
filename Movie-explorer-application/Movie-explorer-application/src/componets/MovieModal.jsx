export default function MovieModal({ show, onClose }) {
  if (!show) return null;

  const backdrop =
    show.image?.original ||
    show.image?.medium ||
    "https://placehold.co/800x400/151a24/9aa1ac?text=No+Image";

  const summary = show.summary
    ? show.summary.replace(/<[^>]+>/g, "")
    : "No summary available.";

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-[var(--surface-2)] max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={backdrop}
            alt={show.name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-black/60 text-white rounded-full hover:bg-black/80"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <h2 className="font-display text-2xl font-semibold mb-2">
            {show.name}
          </h2>
          <p className="text-[var(--muted)] mb-4">
            ⭐ Rating: {show.rating?.average ?? "N/A"} &nbsp;|&nbsp; 📅 Release:{" "}
            {show.premiered || "N/A"}
          </p>

          {show.genres?.length > 0 && (
            <p className="text-sm text-[var(--muted)] mb-4">
              <span className="font-semibold text-[var(--text)]">Genres:</span>{" "}
              {show.genres.join(", ")}
            </p>
          )}

          <h3 className="font-semibold mb-1">Overview</h3>
          <p className="text-[var(--muted)] leading-relaxed mb-6">{summary}</p>

          <button
            onClick={onClose}
            className="bg-[var(--red)] text-white px-5 py-2 rounded-sm text-sm font-semibold hover:brightness-110 transition"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  );
}
