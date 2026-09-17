import { useEffect, useState } from "react";
import { getAllShows, searchShows } from "../api/tvmaze";
import SearchBar from "../componets/SearchBar";
import MovieCard from "../componets/MovieCard";
import MovieModal from "../componets/MovieModal";

export default function Movies() {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    async function loadShows() {
      setLoading(true);
      setError("");

      try {
        let data;
        if (query.trim() === "") {
          data = await getAllShows();
        } else {
          data = await searchShows(query);
        }
        setShows(data);
      } catch {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadShows();
  }, [query]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 flex-1 w-full">
      <h1 className="font-display text-3xl font-semibold text-center mb-8">
        Browse Movies
      </h1>

      <SearchBar value={query} onChange={setQuery} />

      {loading && <p className="text-center text-[var(--muted)]">Loading…</p>}
      {error && <p className="text-center text-[var(--red)]">{error}</p>}
      {!loading && !error && shows.length === 0 && (
        <p className="text-center text-[var(--muted)]">No movies found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {shows.map((show) => (
          <MovieCard key={show.id} show={show} onSeeDetails={setSelectedShow} />
        ))}
      </div>

      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </div>
  );
}
