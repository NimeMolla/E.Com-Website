import { updateCart } from "@/store/cartSlice";
import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const p = data.attributes;
  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* image start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
          height={120}
          width={120}
        />
      </div>
      {/* image end */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* product title start*/}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {p.name}
          </div>
          {/* product title end*/}
          {/* product subtitle for mobile start*/}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {p.subtitle}
          </div>
          {/* product subtitle for mobile end*/}
          {/* product price start*/}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP: &#2547; {p.price}
          </div>
          {/* product price end*/}
        </div>
        {/* product subtitle  start*/}
        <div className="text-md  font-medium text-black/[0.5] md:block hidden">
          {p.subtitle}
        </div>
        {/* product subtitle end*/}
        <div className="flex items-center justify-between mt-4 ">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
                onChange={(e) => {
                  updateCartItem(e, "selectedSize");
                }}
              >
                {p.size.data.map((item, i) => {
                  return (
                    <option
                      key={i}
                      value={item.size}
                      disabled={!item.enabled ? true : false}
                      selected={data.selectedSize === item.size}
                    >
                      {item.size}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black"
                onChange={(e) => {
                  updateCartItem(e, "quantity");
                }}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option key={i} value={q} selected={data.quantity === q}>
                      {q}
                    </option>
                  );
                })}
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
