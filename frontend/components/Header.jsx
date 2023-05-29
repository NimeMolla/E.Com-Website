import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import Wrapper from "./Wrapper";

import Image from "next/image";
import { useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNabar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNabar);
    return () => {
      window.removeEventListener("scroll", controlNabar);
    };
  }, [lastScrollY]);
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="#"
            height="50"
            width="60"
            className="w-[40px] md:w-[60px]"
          />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu}></Menu>
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          ></MenuMobile>
        )}

        <div className="flex items-center gap-2 text-black">
          {/* Icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[25px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              6
            </div>
          </div>
          {/* Icon end */}
          {/* Icon start */}
          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15p] md:text-[20px]" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                5
              </div>
            </div>
          </Link>
          {/* Icon end */}
          {/* mobile menu start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden  justify-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="tet-[16px]"
                onClick={() => {
                  setMobileMenu(false);
                }}
              ></VscChromeClose>
            ) : (
              <BiMenuAltRight
                className="tet-[20px]"
                onClick={() => {
                  setMobileMenu(true);
                }}
              ></BiMenuAltRight>
            )}
          </div>
          {/* mobile menu end */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
