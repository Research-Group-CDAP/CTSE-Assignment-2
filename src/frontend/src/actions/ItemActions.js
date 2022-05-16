import api from "../apis/ItemAPI";

export const ACTION_TYPES = {
  ADD_ITEM: "ADD_ITEM",
  UPDATE_ITEM: "UPDATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
  FETCH_ALL_ITEMS: "FETCH_ALL_ITEMS",
  FETCH_FILTER_ITEMS: "FETCH_FILTER_ITEMS",
  FETCH_ITEM_BY_ID: "FETCH_ITEM_BY_ID",
  FETCH_ITEMS_BY_SELLARID: "FETCH_ITEMS_BY_SELLARID",
  UPDATE_STOCK_SELLAR: "UPDATE_STOCK_SELLAR",
  FETCH_ITEM_STOCK_BY_BRAND: "FETCH_ITEM_STOCK_BY_BRAND",
};

export const filterAllItems = (data) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.FETCH_FILTER_ITEMS,
    payload: data,
  });
};

export const fetchAllItems = () => (dispatch) => {
  api
    .items()
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_ITEMS,
        payload: response.data,
      });
    })
    .catch(() => {});
};

export const fetchItemById = (id) => (dispatch) => {
  api
    .items()
    .fetchById(id)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ITEM_BY_ID,
        payload: response.data,
      });
    })
    .catch(() => {});
};

export const addItem = (data, OnSuccess, OnFailure) => (dispatch) => {
  api
    .items()
    .create(data)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_ITEM,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};

export const updateItem = (data, id, OnSuccess, OnFailure) => (dispatch) => {
  api
    .items()
    .update(data, id)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.UPDATE_ITEM,
        payload: { ...data },
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};

export const deleteItem = (id, OnSuccess, OnFailure) => (dispatch) => {
  api
    .items()
    .delete(id)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.DELETE_ITEM,
        payload: { id },
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};

export const fetchAllItemsBySellarID = (id) => (dispatch) => {
  api
    .items()
    .fetchItemsBySellarId(id)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ITEMS_BY_SELLARID,
        payload: response.data,
      });
    })
    .catch(() => {});
};

export const updateStockSeller =
  (qty, id, onSuccess, onFailure) => (dispatch) => {
    api
      .items()
      .updateStockSeller(qty, id)
      .then((response) => {
        // dispatch({
        //     type: ACTION_TYPES.UPDATE_STOCK_SELLAR,
        //     payload:  response.data ,
        // });
        onSuccess();
      })
      .catch(() => {
        onFailure();
      });
  };

export const fetchStockByBrandSellar = (id) => (dispatch) => {
  api
    .items()
    .fetchitemstockbybrandforuser(id)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ITEM_STOCK_BY_BRAND,
        payload: response.data,
      });
    })
    .catch(() => {});
};
