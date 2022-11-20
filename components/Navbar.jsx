import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(true);

  return (
    <header className="bg-[#EEEEEE] fixed w-full">
      <nav className="flex justify-between items-center mx-[8%] py-4">
        <Link href={"/"}>
          <h1 className="text-2xl">BRAND</h1>
        </Link>

        <div className="lg:hidden">
          {isMenu ? (
            <div>
              <Bars3Icon
                onClick={() => setIsMenu(false)}
                className="h-6 w-6 text-black-500 cursor-pointer"
              />
            </div>
          ) : (
            <div>
              <XMarkIcon
                onClick={() => setIsMenu(true)}
                className="h-6 w-6 text-black-500 cursor-pointer"
              />
            </div>
          )}
        </div>
        <div className="hidden lg:flex gap-8 mr-[2%]">
          <Link
            className="text-gray-600 hover:text-black cursor-pointer text-lg"
            href="/#features"
          >
            Features
          </Link>
          <Link
            className="text-gray-600 hover:text-black cursor-pointer text-lg"
            href="/#howItWorks"
          >
            How It Works
          </Link>
          <Link
            className="text-gray-600 hover:text-black cursor-pointer text-lg"
            href="/#pricing"
          >
            Pricing
          </Link>
        </div>
      </nav>
      <div className="">
        {!isMenu && (
          <div className="w-[50%] ml-auto flex flex-col justify-center items-center gap-10 h-[30vh] ">
            <Link
              className="text-gray-600 hover:text-black cursor-pointer text-lg"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="text-gray-600 hover:text-black cursor-pointer text-lg"
              href="#howItWorks"
            >
              How It Works
            </Link>
            <Link
              className="text-gray-600 hover:text-black cursor-pointer text-lg"
              href="#pricing"
            >
              Pricing
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
