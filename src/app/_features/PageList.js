"use client";

import { useRouter } from "next/navigation";

const PageList = ({ currentPage, query }) => {
  const router = useRouter();

  const handleNext = () => {
    router.push(`/search?query=${query}&page=${currentPage + 1}`);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      router.push(`/search?query=${query}&page=${currentPage - 1}`);
    }
  };

  return (
    <div className="flex items-center justify-between px-10">
      <p>
        Showing results for{" "}
        <span className="font-semibold">Page: {currentPage}</span>
      </p>

      <div className="flex gap-2.5 p-10 justify-end">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          &#8592; Previous
        </button>
        <button onClick={handleNext}>
          Next &#8594;
        </button>
      </div>
    </div>
  );
};

export default PageList;