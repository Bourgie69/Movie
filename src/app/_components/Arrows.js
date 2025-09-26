const Arrows = ({ setCurrentIndex, total }) => {
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <>
      <div className="flex justify-between w-full px-2.5 absolute">
        <button
          className="h-[54px] w-[54px] text-black bg-white rounded-full"
          onClick={handlePrev}
        >
          &#10094;
        </button>
        <button
          className="h-[54px] w-[54px] text-black bg-white rounded-full"
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
    </>
  );
};

export default Arrows