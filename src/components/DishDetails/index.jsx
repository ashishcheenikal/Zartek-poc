import React, { useEffect, useState } from "react";
import { AppContextHook } from "../../context/stateContext";
import loaderGIF from "../../assets/gif/ZZ5H.gif";
import DishCard from "../DishCard";

function DishDetails() {
  const {
    cartCount,
    setCartCount,
    dishData,
    setDishData,
    loaded,
    setLoading,
    cartItems,
    setCartItems,
  } = AppContextHook();

  const [selectedMenuCategory, setSelectedMenuCategory] = useState({});

  useEffect(() => {
    setSelectedMenuCategory(dishData[0]?.table_menu_list[0]);
    console.log("selectedMenuCategory", selectedMenuCategory);
  }, [dishData]);

  const handleMenuCategorySelection = (menu_category, index) => {
    setSelectedMenuCategory(dishData[0]?.table_menu_list[index]);
  };

  const handleAddToCart = (event) => {
    if (event) {
      setCartCount(cartCount + 1);
    } else {
      cartCount !== 0 && setCartCount(cartCount - 1);
    }
  };

  return (
    <>
      {loaded ? (
        <div
          className={`loader w-full ${
            loaded ? "" : "hidden"
          } flex items-center h-screen justify-center`}
        >
          <img className="w-12 h-12" src={loaderGIF} alt="" />
        </div>
      ) : (
        <>
          <div className="categoryList flex items-center w-full h-14 overflow-x-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thin">
            <div className="category">
              <ul className="flex">
                {dishData.length !== 0 &&
                  dishData[0].table_menu_list.map((_category, index) => {
                    return (
                        <li
                          className={`w-[400px] text-lg text-center cursor-pointer hover:text-red-600 ${
                            selectedMenuCategory?.menu_category ===
                            _category.menu_category
                              ? "text-red-600"
                              : "text-black"
                          }`}
                          key={index}
                          onClick={() =>
                            handleMenuCategorySelection(
                              _category.menu_category,
                              index
                            )
                          }
                        >
                          {_category.menu_category}
                        </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <DishCard
            selectedMenuCategory={selectedMenuCategory}
            cartCount={cartCount}
            handleAddToCart={handleAddToCart}
          />
        </>
      )}
    </>
  );
}

export default DishDetails;
