import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Bread",
      price: 30,
      image:
        "https://houseofnasheats.com/wp-content/uploads/2022/02/French-Bread-1.jpg",
    },
    {
      id: 2,
      name: "Milk",
      price: 50,
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?quality=70&resize=300,300",
    },
    {
      id: 3,
      name: "Cheese",
      offer: "Buy 1 get 1 free!",
      price: 80,
      image:
        "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQgMUgf_R3eQVAHpU26GzPq8wqTC7_wVt16FVSS1dMQESbpe1F_7iUuTAmutUQmINDL",
    },
    {
      id: 4,
      name: "Soup",
      price: 60,
      offer: "Buy a soup and get Bread for half the price!",
      image:
        "https://kristineskitchenblog.com/wp-content/uploads/2022/02/minestrone-soup-recipe-22.jpg",
    },
    {
      id: 5,
      name: "Butter",
      price: 99,
      offer: "Get 33% off!",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/600px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG",
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
