import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const config = {
  headers: authHeader(),
};

const cartAPI = {
  cartItems() {
    return {
      addItemsToCart: (data) => axios.post(baseUrl + "/api/cart", data, config),
      fetchCartItemsForUser: (id) =>
        axios.get(baseUrl + "/api/cart/" + id, config),
      deleteCartItem: (id) => axios.delete(baseUrl + "/api/cart/" + id, config),
      fetchPayedCartItemsForUser: (id) =>
        axios.get(baseUrl + "/api/cart/" + id + "/payedCarts", config),
    };
  },
};

export default cartAPI;
