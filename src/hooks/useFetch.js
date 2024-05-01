import React, { useEffect, useMemo, useRef, useState } from "react";

const useFetch = (type) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const cache = useRef({});
  const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    if (!url) return;
    let cancelRequest = false;
    const fetchDetails = async () => {
      setLoading(true);
      if (cache.current[url]) {
        const data = cache.current[url];
        setData(data);
        setLoading(false);
      } else {
        try {
          const response = await fetch(url);
          const json = await response.json();
          cache.current[url] = json.results; // set response in cache;
          if (cancelRequest) return;
          setData(json.results);
        } catch (error) {
          if (cancelRequest) return;
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchDetails();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
