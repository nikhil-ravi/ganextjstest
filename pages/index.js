import Image from "next/image";
import {
  FadeContainer,
  opacityVariant,
  popUp,
} from "../content/FramerMotionVariants";
import { homeProfileImage } from "../utils/utils";
import { motion } from "framer-motion";
import Ripples from "react-ripples";
import Metadata from "../components/metaData";
import pageMeta from "../content/meta";
import Link from "next/link";
import ProductCard from "../components/productCard";
import PrevItemIcon from "../components/prevItemIcon";
import NextItemIcon from "../components/nextItemIcon";
import products from "../content/products";
import { useState } from "react";

export default function Home() {
  const activeProducts = products.filter((product) => {
    return product.active === true;
  });
  const [productIdx, setProductIdx] = useState(0);

  function nextProduct() {
    if (productIdx === activeProducts.length - 1) {
      setProductIdx(0);
    } else {
      setProductIdx(productIdx + 1);
    }
  }
  function prevProduct() {
    if (productIdx === 0) {
      setProductIdx(activeProducts.length - 1);
    } else {
      setProductIdx(productIdx - 1);
    }
  }
  return (
    <>
      <Metadata
        description={pageMeta.home.description}
        previewImage={pageMeta.home.image}
        keywords={pageMeta.home.keywords}
      />

      {/* Following is the new Code */}
      <div className="relative dark:bg-darkPrimary dark:text-gray-100 max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={FadeContainer}
          viewport={{ once: true }}
          className="grid place-content-center py-20  min-h-screen"
          id="HeroSideImageRight"
        >
          <div className="w-full relative mx-auto flex flex-col items-center gap-10">
            <motion.div
              variants={popUp}
              className="flex w-96 h-48 justify-center items-center rounded-xl p-3 before:absolute before:inset-0 before:rounded-xl  "
            >
              <Image
                src={homeProfileImage}
                className="rounded-xl  sm:scale-150"
                width={1400}
                height={1400}
                alt="cover Profile Image"
                quality={100}
                priority={true}
              />
            </motion.div>

            <div className="w-full flex flex-col p-5 gap-3 select-none text-center mt-10">
              <div className="flex flex-col gap-1">
                <motion.h1
                  variants={opacityVariant}
                  className="text-5xl lg:text-6xl font-bold font-mono"
                >
                  The best products for your dog
                </motion.h1>
                <motion.p
                  variants={opacityVariant}
                  className="font-medium text-xs md:text-sm lg:text-lg text-gray-500 mt-4"
                >
                  Because your dogs deserve to be at their happiest
                </motion.p>
              </div>
              <motion.div
                className="rounded-md overflow-hidden"
                // variants={popUp}
              >
                <Ripples color="rgba(0, 0, 0, 0.5)">
                  <Link href="/about">
                    <button className="flex items-center gap-2 px-5 py-2 border rounded-md border-gray-500 dark:border-gray-400 select-none  hover:bg-gray-100 dark:hover:bg-neutral-800 outline-none  my-5">
                      <p>Learn More</p>
                    </button>
                  </Link>
                </Ripples>
              </motion.div>
            </div>
          </div>
        </motion.section>
        {/* Feature List */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={FadeContainer}
          viewport={{ once: true }}
          className="relative grid place-content-center min-h-screen"
          id="FeatureList"
        >
          <div className="w-full mx-auto flex flex-col items-center gap-10">
            <button
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={prevProduct}
              variants={popUp}
            >
              <PrevItemIcon />
            </button>
            <ProductCard
              title={activeProducts[productIdx].title}
              price={activeProducts[productIdx].price}
              productImages={[
                "/assets/images/products/apple-watch.png",
                "/assets/images/products/apple-watch-1.png",
              ]}
              description={activeProducts[productIdx].description}
              highlighted_features={
                activeProducts[productIdx].highlighted_features
              }
              paymentLink={undefined}
            />
            {/* Slider controls */}
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={nextProduct}
            >
              <NextItemIcon />
            </button>
          </div>
        </motion.section>
      </div>
    </>
  );
}
