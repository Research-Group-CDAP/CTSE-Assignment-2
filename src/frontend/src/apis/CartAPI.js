import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_CART_SERVICE;

const config = {
  headers: authHeader(),
};

const cartAPI = {
  cartItems() {
    return {
      createCartForUser: (data) => axios.post(baseUrl + "/api/cart", data, config),
      addItemsToCart: (data) => axios.post(baseUrl + "/api/cart", data, config),
      fetchCartItemsForUser: (id) =>
        axios.get(baseUrl + "/api/carts/user/" + id, config),
      deleteCartItem: (id) => axios.delete(baseUrl + "/api/cart/" + id, config),
      fetchPayedCartItemsForUser: (id) =>
        axios.get(baseUrl + "/api/cart/" + id + "/payedCarts", config),
    };
  },
};

export default cartAPI;
