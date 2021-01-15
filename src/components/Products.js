import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Spinner,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import { getProducts } from "../api/productsApi";
import useApiReducer from "../customHooks/useApiReducer";
import localStyles from "./Products.module.scss";
import Cart from "./Cart";

const Products = () => {
  const [productsState, disPatchGetProducts, clearProductState] = useApiReducer(
    getProducts
  );
  const { isPending, isSuccess, isError, errorData, successData } =
    productsState || {};
  useEffect(() => {
    disPatchGetProducts();
  }, []);
  const [cartList, setCartList] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const toggleCartModal = () => setShowCartModal(!showCartModal);

  const cardContainerViewProps = {
    sm: { size: 12, offset: 0 },
    md: { size: 12, offset: 0 },
    lg: { size: 12, offset: 0 },
  };
  const addToCartAction = (payload) => () =>
    setCartList([...cartList, payload]);
  return (
    <section className={localStyles.products}>
      {isSuccess && (
        <Button
          onClick={toggleCartModal}
          color='link'
        >{`Cart [${cartList.length}]`}</Button>
      )}
      <Cart
        list={cartList}
        toggleCart={toggleCartModal}
        showModal={showCartModal}
      />
      <Row>
        {isPending && (
          <Col
            {...cardContainerViewProps}
            className={localStyles.spinnerContainer}
          >
            <Spinner
              style={{ width: "5rem", height: "5rem" }}
              color='primary'
            />
          </Col>
        )}
        <Col {...cardContainerViewProps} className={localStyles.cardContainer}>
          {isSuccess &&
            successData?.map((product) => {
              const { name, price, image, code } = product || {};
              return (
                <Card className={localStyles.card} key={code}>
                  <CardImg
                    bottom
                    width='200px'
                    height='200px'
                    src={image}
                    alt='Card image cap'
                  />
                  <CardBody>
                    <CardTitle tag='h5'>{name}</CardTitle>
                    <CardSubtitle tag='h6' className='mb-2 text-muted'>
                      {`Code: ${code}`}
                    </CardSubtitle>
                    <CardText>{`Price: ${price}`} </CardText>
                    <Button
                      color='success'
                      onClick={addToCartAction(productsState)}
                    >
                      Add to Cart
                    </Button>
                  </CardBody>
                </Card>
              );
            })}
        </Col>
      </Row>
    </section>
  );
};

Products.prototype = {
  type: PropTypes.oneOf(["signIn", "signUp"]),
};

export default Products;
