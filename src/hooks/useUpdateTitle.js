import { useEffect } from "react";

const useUpdateTitle = (title) => {
  useEffect(() => {
    document.title = `${title ? title : ""} / Cinemate`;
    console.log("movie list");
  });
  return null;
};

export default useUpdateTitle;
