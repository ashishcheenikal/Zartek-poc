import React from "react";
import { AppContextHook } from "../../context/stateContext";

function Header() {
  const { cartCount, setCartCount, dishData, setDishData, loaded, setLoading } =
    AppContextHook();
  return (
    <>
      <div className=" flex justify-between w-full h-16 border border-solid border-black">
        {dishData.length !== 0 ? (
          <div className="flex items-center ml-6 text-[30px]">
            {dishData[0]?.restaurant_name}
          </div>
        ) : (
          <div className="flex items-center ml-6 text-[30px]">
            Restaurant Name
          </div>
        )}
        <div className="flex items-center relative">
          <div className="mr-4 text-l">My Orders</div>
          <div className="cartIcon mr-6 mt-3">
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
          <div className="NoOfItems w-6 h-6 bg-red-500 text-white absolute top-0 right-[0.9rem] border border-solid border-red-500 rounded-full w-26 h-26 text-center">
            {cartCount}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
