import * as actionType from "../actions/action";

const initialState = {
  orders: [],
  loading: false,
  purchasing: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      };
    case actionType.PURCHASE_INIT:
      return {
        ...state,
        purchasing: false
      };

    case actionType.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      };
      return {
        ...state,
        loading: false,
        order: state.orders.concat(newOrder),
        purchasing: true
      };
    case actionType.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionType.FETCH_ORDERS_START:
      return {
        ...state,
        loading: true
      };
    case actionType.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.order,
        loading: false
      };
    case actionType.FETCH_ORDERS_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
