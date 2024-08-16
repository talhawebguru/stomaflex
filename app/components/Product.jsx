import React from "react";
import Category from "./Category";
import ProductData from "./ProductData";
import MobileDropDown from "./MobileDropDown";

const Product = () => {
  return (
    <>
      <div className="mt-32 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] lg:px-[40px] px-5">
        <div className="flex justify-around items-center">
          <h2 className="text-primary text-[42px] font-normal font-nohemi text-center">
            Products
          </h2>
          <MobileDropDown />
        </div>
        <Category />
        <ProductData />
      </div>
    </>
  );
};

export default Product;
