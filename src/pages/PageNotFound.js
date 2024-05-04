import React from "react";
import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";
import useUpdateTitle from "../hooks/useUpdateTitle";

const PageNotFound = () => {
  useUpdateTitle("Page Not Found");
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404, Oops!
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 page not found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Back to Cinemate
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
