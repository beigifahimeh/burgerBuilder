import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import classes from "./contactdata.module.css";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/spinner/spinner";
import Input from "../../components/UI/Input/Input";
import { connect } from "react-redux";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import * as action from "../../store/actions/index";
class ContactForm extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "your Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: " street"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip code"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: " your email"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: "",
        valid: true,
        validation: {},
        touched: false
      }
    },
    formIsValid: false
    // loading: false
  };
  checkValidity = (value, Rule) => {
    let isValid = true;
    if (Rule.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (Rule.minLength) {
      isValid = value.length >= Rule.minLength && isValid;
    }
    if (Rule.maxLength) {
      isValid = value.length <= Rule.maxLength && isValid;
    }
    return isValid;
  };

  OrderHandler = event => {
    event.preventDefault();
    // this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const order = {
      ingredient: this.props.ing,
      price: this.props.totalPrice,
      orderData: formData,
      userId: this.props.userId
    };
    this.props.onPurchaseBurger(order, this.props.token);

    // axios
    //   .post("/orders.json", order)
    //   .then(response => {
    //     this.setState({ loading: false });
    //     this.props.history.push("/");
    //   })
    //   .catch(error => this.setState({ loading: false }));
  };
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormElement = { ...this.state.orderForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    console.log(updatedFormElement);
    updatedFormElement.touched = true;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    console.log(updatedFormElement);
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  render() {
    const formElementArray = [];
    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form onSubmit={this.OrderHandler} className={classes.contactData}>
        {formElementArray.map(formElement => (
          <Input
            invalid={!formElement.config.valid}
            shouldValidated={formElement.config.validation}
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            touched={formElement.config.touched}
            value={formElement.config.value}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          ></Input>
        ))}
        <Button disabled={!this.state.formIsValid} btnType="Success">
          ORDER
        </Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>please fill the form below</h1>
        {form}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ing: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.tokenId,
    userId: state.auth.userId
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onPurchaseBurger: (orderData, token) =>
      dispatch(action.purchaseBurger(orderData, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(ContactForm, axios));
