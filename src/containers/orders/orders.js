import React, { Component } from "react";
import Order from "../../components/order/order";
import axios from "../../axios-orders";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import * as action from "../../store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../components/UI/spinner/spinner";
class Orders extends Component {
  // state = {
  //   orders: [],
  //   loading: true
  // };

  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
    console.log(this.props.userId);
  }
  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ));
    }
    return <div>{orders}</div>;
  }
}
const mapStateToProps = state => {
  return {
    loading: state.order.loading,
    orders: state.order.orders,
    token: state.auth.tokenId,
    userId: state.auth.userId
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(action.fetchOrder(token, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(Orders, axios));
