import api from "../apis/CartAPI";

export const ACTION_TYPES = {
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  GET_ITEM_FROM_CART: "GET_ITEM_FROM_CART",
  DELETE_ITEM_FROM_CART: "DELETE_ITEM_FROM_CART",
  GET_PAYED_ITEMS_FROM_CART: "GET_PAYED_ITEMS_FROM_CART",
  GET_PAYED_ITEMS_FROM_CART_PENDING: "GET_PAYED_ITEMS_FROM_CART_PENDING",
};

export const addItemToCart = (data, onSuccess, onFailure) => (dispatch) => {
  api
    .cartItems()
    .addItemsToCart(data)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_ITEM_TO_CART,
        payload: response.data,
      });
      onSuccess();
    })
    .catch(() => {
      onFailure();
    });
};

export const getItemFromCart = (id) => (dispatch) => {
  api
    .cartItems()
    .fetchCartItemsForUser(id)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_ITEM_FROM_CART,
        payload: response.data,
      });
    })
    .catch(() => {});
};

export const deleteItemFromCart = (id, onSuccess, onFailure) => (dispatch) => {
  api
    .cartItems()
    .deleteCartItem(id)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.DELETE_ITEM_FROM_CART,
        payload: { id },
      });
      onSuccess();
    })
    .catch(() => {
      onFailure();
    });
};

export const getPayedItemsFromCart = (id) => (dispatch) => {
  api
    .cartItems()
    .fetchPayedCartItemsForUser(id)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_PAYED_ITEMS_FROM_CART,
        payload: response.data,
      });
    })
    .catch(() => {});
};
