import { ACTION_TYPES } from "../actions/ItemActions";

const initialState = {
  itemList: [],
  itemListPending: true,
  filterItemList: [],
  singleItem: "",
  deletedItem: "",
  sellarItemList: [],
  sellarItemListPending: true,
  stockBrandList: [],
  stockBrandListPending: true,
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_ITEMS:
      return {
        ...state,
        itemList: [...action.payload],
        filterItemList: [...action.payload],
        itemListPending: false,
      };
    case ACTION_TYPES.FETCH_ITEM_BY_ID:
      return {
        ...state,
        singleItem: action.payload,
      };
    case ACTION_TYPES.FETCH_FILTER_ITEMS:
      return {
        ...state,
        filterItemList: [...action.payload],
      };
    case ACTION_TYPES.ADD_ITEM:
      return {
        ...state,
        sellarItemList: [...state.sellarItemList, action.payload],
      };
    case ACTION_TYPES.UPDATE_ITEM:
      return {
        ...state,
        sellarItemList: state.sellarItemList.map((x) =>
          x.id === action.payload.id ? action.payload : x
        ),
      };
    case ACTION_TYPES.DELETE_ITEM:
      return {
        ...state,
        sellarItemList: state.sellarItemList.filter(
          (x) => x.id !== action.payload.id
        ),
        deletedItem: action.payload.id,
      };
    case ACTION_TYPES.FETCH_ITEMS_BY_SELLARID:
      return {
        ...state,
        sellarItemList: [...action.payload],
        sellarItemListPending: false,
      };
    case ACTION_TYPES.FETCH_ITEM_STOCK_BY_BRAND:
      return {
        ...state,
        stockBrandList: [...action.payload],
        stockBrandListPending: false,
      };
    default:
      return state;
  }
};
