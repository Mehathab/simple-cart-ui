import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import localStyles from "./Cart.module.scss";

const formatCartListData = (cartList) => {
  const cartObj = {};
  cartList?.forEach?.((item) => {
    const { name, price, code } = item || {};
    if (cartObj?.[code]) {
      cartObj[code].quantity += 1;
    } else {
      cartObj[code] = { name, price, quantity: 1 };
    }
  });
  return cartObj;
};
const Cart = ({ list, toggleCart, showModal }) => {
  const cartObjData = formatCartListData(list);
  return (
    <Modal isOpen={showModal} toggle={toggleCart}>
      <ModalHeader toggle={toggleCart}>
        {`Added Items - ${list?.length}`}
      </ModalHeader>
      <ModalBody>
        {Object.entries(cartObjData)?.map(([key, itemObj]) => (
          <article key={key}>
            <p>{itemObj.name}</p>
            <p>{`${key} @${itemObj.quantity} x ${itemObj.price}`}</p>
          </article>
        ))}
      </ModalBody>
    </Modal>
  );
};

Cart.prototype = {
  type: PropTypes.oneOf(["signIn", "signUp"]),
};

export default Cart;
