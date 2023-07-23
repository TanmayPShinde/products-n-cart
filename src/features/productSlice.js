import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Bread",
      price: 30,
      image:
        "https://cdn.pixabay.com/photo/2016/11/20/08/33/camera-1842202__480.jpg",
    },
    {
      id: 2,
      name: "Milk",
      price: 50,
      image:
        "https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938__340.jpg",
    },
    {
      id: 3,
      name: "Cheese",
      offer: "Buy 1 get 1 free!",
      price: 80,
      image:
        "https://cdn.pixabay.com/photo/2019/06/30/18/19/tv-4308538__480.jpg",
    },
    {
      id: 4,
      name: "Soup",
      price: 60,
      offer: "Buy a soup and get Bread for half the price!",
      image:
        "https://cdn.pixabay.com/photo/2017/08/11/14/19/honor-2631271__340.jpg",
    },
    {
      id: 5,
      name: "Butter",
      price: 99,
      offer: "Get 1/3rd price off!",
      image:
        "https://cdn.pixabay.com/photo/2017/08/11/14/19/honor-2631271__340.jpg",
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
