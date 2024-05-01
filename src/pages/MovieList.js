import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

const MovieList = ({ type }) => {
  console.log(type);
  const { data: movies, loading, error } = useFetch(type);

  console.log("Movie LIST ", movies);

  if (loading) return <p>Loading.....</p>;
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
