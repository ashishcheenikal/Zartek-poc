import React from "react";

function DishCard({ selectedMenuCategory, cartCount, handleAddToCart }) {
  return (
    <div className="dishCardWrapper">
      <ul>
        {selectedMenuCategory &&
          selectedMenuCategory?.category_dishes.map((category_dish, index) => {
            return (
              <div
                className="dishCard flex border border-solid border-gray-400 w-full sm:h-96 md:h-52 "
                key={index}
              >
                <div className="radioBtn m-3">
                  {/* <div class="flex items-center mr-4 mb-4"> */}
                  <div className="flex items-center cursor-pointer">
                    <span className="w-4 h-4 inline-block  border border-grey">
                      <span
                        className={`w-3 h-3 inline-block ${
                          category_dish.dish_Availability
                            ? "bg-green-500"
                            : "bg-red-600"
                        }`}
                      ></span>
                    </span>
                  </div>
                  {/* </div> */}
                </div>
                <div className="dishCardLeft w-3/5">
                  <li className="dishName text-xl font-bold p-1">
                    {category_dish.dish_name}
                  </li>
                  <li className="dishCurrency text-sm font-bold p-1">
                    {category_dish.dish_currency} :{category_dish.dish_price}
                  </li>
                  {/* <li className="dishPrice ">
                  {category_dish.dish_price}
                </li> */}
                  <li className="dishDescription text-gray-400 p-1">
                    {category_dish.dish_description}
                  </li>
                  {category_dish.dish_Availability && (
                    <div className="addToCart flex items-center bg-green-500 text-white w-40 p-1">
                      <span
                        className="plusIcon m-3 hover:cursor-pointer"
                        onClick={() => handleAddToCart(true)}
                      >
                        +
                      </span>
                      <span className="cartText">Add to cart</span>
                      <span
                        className="minusIcon m-3 hover:cursor-pointer"
                        onClick={() => handleAddToCart(false)}
                      >
                        -
                      </span>
                    </div>
                  )}
                  {cartCount > 0 && category_dish.dish_Availability && (
                    <li className="text-red-600">Customizations available</li>
                  )}
                  <li
                    className={`dishAvailability ${
                      category_dish.dish_Availability ? "hidden" : ""
                    } `}
                  >
                    {`${
                      category_dish.dish_Availability ? "" : "Not Available"
                    }`}
                  </li>
                </div>
                <div className="dishCardRight w-2/5 flex items-start flex-row-reverse justify-between m-3">
                  <li className="dishImage ">
                    <img
                      className="w-[100px] h-[100px]"
                      src={category_dish.dish_image}
                      alt="dish_image"
                    />
                  </li>
                  <li className="dishCalories ">
                    {category_dish.dish_calories} Calories
                  </li>
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default DishCard;
