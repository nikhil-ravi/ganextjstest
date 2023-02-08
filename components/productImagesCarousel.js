import Image from "next/image";
import { useState } from "react";
import NextItemIcon from "./nextItemIcon";
import PrevItemIcon from "./prevItemIcon";

const ProductImagesCarousel = ({ imageList }) => {
  const [imageIdx, setImageIdx] = useState(0);
  function nextImage() {
    if (imageIdx === imageList.length - 1) {
      setImageIdx(0);
    } else {
      setImageIdx(imageIdx + 1);
    }
  }
  function prevImage() {
    if (imageIdx === 0) {
      setImageIdx(imageList.length - 1);
    } else {
      setImageIdx(imageIdx - 1);
    }
  }
  return (
    <div className="relative">
      <div className="duration-700 ease-in-out">
        <Image
          src={imageList[imageIdx]}
          // className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          className="p-8 rounded-t-lg"
          width={480}
          height={480}
          alt="..."
        />
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevImage}
      >
        <PrevItemIcon />
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextImage}
      >
        <NextItemIcon />
      </button>
    </div>
  );
};

export default ProductImagesCarousel;
