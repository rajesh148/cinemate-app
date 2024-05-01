import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

const MovieList = ({ type }) => {
  const { data: movies, loading, error } = useFetch(type);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {error && (
            <p className="text-gray-700 text-3xl dark:text-white">
              Something is went wrong!!!
            </p>
          )}
          {loading ? (
            <p className="text-gray-700 text-3xl dark:text-white">Loading...</p>
          ) : (
            movies &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)
          )}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
