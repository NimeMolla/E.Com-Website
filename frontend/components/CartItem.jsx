import React from "react";
import { RiDeleteBin6Line } from 'react-icons/ri';

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* image start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src="product-1.webp" alt="" />
      </div>
      {/* image end */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* product title start*/}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            Jordan Retro 6 G
          </div>
          {/* product title end*/}
          {/* product subtitle for mobile start*/}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Men&apos;s Golf Shoes
          </div>
          {/* product subtitle for mobile end*/}
          {/* product price start*/}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            $ 599
          </div>
          {/* product price end*/}
        </div>
        {/* product subtitle  start*/}
        <div className="text-md  font-medium text-black/[0.5] md:block hidden">
          Men&apos;s Golf Shoes
        </div>
        {/* product subtitle end*/}
        <div className="flex items-center justify-between mt-4 ">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black">
                <option value="6">UK 6</option>
                <option value="7">UK 7</option>
                <option value="8">UK 8</option>
                <option value="9">UK 9</option>
                <option value="10">UK 10</option>
                <option value="11">UK 11</option>
                <option value="12">UK 12</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select className="hover:text-black">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
          <RiDeleteBin6Line className="cursor-pointer text-black/[.5] hover:text-black text-[16px] md:text-[20px]"></RiDeleteBin6Line>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
