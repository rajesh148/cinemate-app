import { Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="dark:bg-darkbg">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<MovieList type="movie/now_playing" title="Home" />}
        />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route
          path="/movies/popular"
          element={<MovieList type="movie/popular" title="Popular" />}
        />
        <Route
          path="/movies/top"
          element={<MovieList type="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="/movies/upcoming"
          element={<MovieList type="movie/upcoming" title="Upcoming" />}
        />
        <Route path="search" element={<Search type="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
