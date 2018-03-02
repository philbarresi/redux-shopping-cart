import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default function ProductRow({ product, addToCart }) {
  return (
    <Card className="mb-4">
      <CardBody>
        <CardTitle>{product.name}</CardTitle>
        <CardSubtitle>${product.cost.toFixed(2)}</CardSubtitle>
        <CardText>{product.description}</CardText>
        <Button onClick={() => addToCart(product.id, 1)}>
          Add 1 to Cart
        </Button>{" "}
        <Button onClick={() => addToCart(product.id, 5)}>Add 5 to Cart</Button>
      </CardBody>
    </Card>
  );
}
