import React from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

const Search = ({ type }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies, loading, error } = useFetch(type, queryTerm);
  return (
    <main>
      <section className="py-7">
        {movies && movies.length > 0 ? (
          <p className="text-gray-700 text-2xl dark:text-white">{`Search Result for '${queryTerm}'`}</p>
        ) : (
          <p className="text-gray-700 text-2xl dark:text-white">{`No reuslt found for '${queryTerm}'`}</p>
        )}
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {error && (
            <p className="text-white text-3xl">Something is went wrong!!!</p>
          )}
          {loading ? (
            <p>Loading...</p>
          ) : (
            movies &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)
          )}
        </div>
      </section>
    </main>
  );
};

export default Search;
