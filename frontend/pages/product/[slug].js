import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import RelatedProducts from "../../components/RelatedProducts";
const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left colum start */}
          <div className=" w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel></ProductDetailsCarousel>
          </div>
          {/* left colum end */}

          {/* right colum start */}
          <div className="flex-[1] py-3 ">
            {/* product title */}
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 6
            </div>
            {/* product subtitle */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>
            {/* product price */}
            <div className="text-lg font-semibold ">MRP: $ 599.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also include all applicable duties)`}
            </div>

            {/* product size range start */}
            <div className="mb-10">
              {/* heading start */}
              <div className="flex  justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* heading end */}
              {/* size start */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UL 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UL 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UL 8
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UL 9
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UL 10
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UL 11
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UL 12
                </div>
              </div>
              {/* size end */}
              {/* show error start */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* show error end */}
            </div>
            {/* product size range end */}

            {/* add to cart button start */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            {/* add to cart button end */}
            {/* wishlist button start */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Wishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* wishlist button end */}

            {/* product details start */}
            <div>
              <div className="text-lg font-bold mb-5">
                Product Details
              </div>
              <div className="text-md mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae illo asperiores. Eligendi, similique, harum corporis libero hic aliquam deleniti at facere voluptatum voluptate illo ipsam. Veritatis, amet, ut architecto temporibus eaque veniam corporis accusantium corrupti atque tempore doloremque suscipit excepturi cupiditate unde quam porro et exercitationem autem aperiam quae.
              </div>
              <div className="text-md mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae illo asperiores. Eligendi, similique, harum corporis libero hic aliquam deleniti at facere voluptatum voluptate illo ipsam. Veritatis, amet, ut architecto temporibus eaque veniam corporis accusantium corrupti atque tempore doloremque suscipit excepturi cupiditate unde quam porro et exercitationem autem aperiam quae.
              </div>
            </div>
            {/* product details end */}
          </div>
          {/* right colum end */}
        </div>
        <RelatedProducts/>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
