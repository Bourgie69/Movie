const Arrows = ({ currentIndex }) => {
  const handleIndex = () => {
    currentIndex++;
    console.log(currentIndex);
  };
  return (
    <>
      <div className="flex justify-between w-full px-2.5">
        <button
          className="h-[54px] w-[54px] text-black bg-white rounded-full"
          onClick={handleIndex}
        >
          &#10094;
        </button>
        <button
          className="h-[54px] w-[54px] text-black bg-white rounded-full"
          onClick={handleIndex}
        >
          &#10095;
        </button>
      </div>
    </>
  );
};
export default Arrows;
