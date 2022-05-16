import { ACTION_TYPES } from "../actions/CartActions";

const initialState = {
  cartList: [],
  payedCartList: [],
  cartListPending: true,
  payedCartPending: true,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };
    case ACTION_TYPES.GET_ITEM_FROM_CART:
      return {
        ...state,
        cartList: [...action.payload],
        cartListPending: false,
      };
    case ACTION_TYPES.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartList: state.cartList.filter((x) => x.id !== action.payload.id),
      };
    case ACTION_TYPES.GET_PAYED_ITEMS_FROM_CART:
      return {
        ...state,
        payedCartList: [...action.payload],
        payedCartPending: false,
      };
    default:
      return state;
  }
};
