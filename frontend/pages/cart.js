import CartItem from "@/components/CartItem";
import Wrapper from "@/components/Wrapper";

const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* Heading and paragraph start */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>
        {/* Heading and paragraph end */}

        {/* cart content start */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* cart item start */}
          <div className="flex-[2]">
            <div className="text-lg font-bold ">Cart Items</div>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
          </div>
          {/* cart item end */}

          {/* summery start */}
          <div className="flex-[1]">
            <div className="flex-lg font-semibold">Summery</div>

            <div className="p-5 my-5  rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-black">
                  SubTotal
                </div>
                <div className="text-md md:text-lg font-medium text-black">
                  $ 599
                </div>
              </div>
              <div className="text-sm md:text-md py border-t mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                vero eligendi sed provident quas dolor accusantium repellat
                ducimus, explicabo expedita excepturi dolore asperiores
                similique natus consectetur. Quasi sint delectus magni expedita
                totam beatae optio ex facilis doloremque provident, omnis
                adipisci incidunt accusantium alias eos dolorem quibusdam ab
                est? Eligendi, aliquid!
              </div>
            </div>
            {/* button start */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Checkout
            </button>
            {/* button end */}
          </div>
          {/* summery end */}
        </div>
        {/* cart content end */}

        {/* this part is for empty cart  */}

        {/* <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <Image
            src="/empty-cart.jpg"
            width={300}
            height={300}
            className="w-[300px] md:w-[400px]"
            alt="empty cart"
          ></Image>
          <span className="text-xl font-bold">Your Cart is empty</span>
          <span className="text-center mt-4">
            Looks like you have not added anything in your cart
            <br />
            Go ahead and explore top category.
          </span>
          <Link
            href="/"
            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Continue Shopping
          </Link>
        </div> */}
      </Wrapper>
    </div>
  );
};

export default Cart;
