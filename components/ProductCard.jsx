import Link from "next/link";
import ListIcon from "./ListIcon";
import ProductImagesCarousel from "./ProductImagesCarousel";
import { motion } from "framer-motion";
import { popUp } from "../content/FramerMotionVariants";

const ProductCard = ({
  title,
  price,
  productImages,
  description,
  highlighted_features,
  paymentLink,
}) => {
  return (
    <motion.div
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-darkSecondary dark:border-gray-700"
      variants={popUp}
    >
      {productImages && <ProductImagesCarousel imageList={productImages} />}
      <div className="px-5 pb-5">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        {/* Description */}
        <p className="my-3">{description}</p>

        {/* Highlighted Features */}
        {highlighted_features && (
          <ul role="list" className="space-y-4">
            {highlighted_features.map((feature, index) => (
              <li key={index} className="flex space-x-2">
                <ListIcon name={feature.icon} />
                <span className="font-light leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Price and Buy Now Button */}
        <div className="flex items-center justify-between  mt-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <Link
            href={`/buy/${title.toLowerCase().replace(/\s/g, "-")}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <button id="buy-now-button">Buy Now</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
