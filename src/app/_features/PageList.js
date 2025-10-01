const PageList = (props) => {
  const { page, setPage } = props;

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <>
      <div className="flex items-center justify-between px-10">
        <p>
          Showing results for{" "}
          <span className="font-semibold">Page: {page}</span>
        </p>
        <div className="flex gap-2.5 p-10 justify-end">
          <button onClick={handlePrev}>&#8592; Previous</button>
          <button onClick={handleNext}>Next &#8594;</button>
        </div>
      </div>
    </>
  );
};

export default PageList;
