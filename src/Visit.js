// Visit.js
import { useEffect } from "react";

const Visit = () => {
  useEffect(() => {
    // Get the current visit count from localStorage
    let visitCount = localStorage.getItem("visitCount");

    // If it's the first visit, initialize it to 1, else increment it
    if (!visitCount) {
      visitCount = 1;
    } else {
      visitCount = parseInt(visitCount) + 1;
    }

    // Save the updated visit count back to localStorage
    localStorage.setItem("visitCount", visitCount);

    // Log the visit count to the console
    console.log(`This page has been visited ${visitCount} times.`);
  }, []); // Empty dependency array ensures this runs only once on page load

  return null; // This component doesn't render anything on the screen
};

export default Visit;
