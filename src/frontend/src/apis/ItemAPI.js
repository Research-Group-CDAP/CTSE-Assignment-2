import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_PRODUCT_SERVICE;

const config = {
  headers: authHeader(),
};

const itemsAPI = {
  items() {
    return {
      fetchAll: () => axios.get(baseUrl + "/api/products/"),
      fetchById: (id) => axios.get(baseUrl + "/api/products/" + id),
      create: (newItem) => axios.post(baseUrl + "/api/products/", newItem, config),
      update: (updateItem,id) =>
        axios.put(baseUrl + "/api/products/" + id, updateItem, config),
      delete: (id) => axios.delete(baseUrl + "/api/products/" + id, config),
      fetchItemsById:(id) => axios.get(baseUrl + "/api/products/" + id, config),
      updateStockSeller:(qty,id)=> axios.put(baseUrl + "/api/item/sellar/" + qty+ "/" + id, config),
      fetchitemstockbybrandforuser:(id)=> axios.get(baseUrl + "/api/item/itembrands/"+ id, config),
    };
  },
};
export default itemsAPI;
