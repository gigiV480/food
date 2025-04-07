import React from "react";
import Product from "./Product";
import classes from "./ProductList.module.css";
import Card from "../UI/Card";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Bread",
    price: 2.99,
    src: "https://panamarbakery.com/public/Image/2021/3/161547156013789normal.png",
  },
  {
    id: "p2",
    title: "Butter",
    price: 10,
    src: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-07/healthiest-butter-jp-240709-8ce75e.jpg",
  },
  {
    id: "p3",
    title: "Jam",
    price: 4.49,
    src: "data:image/jpeg;base64,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",
  },
  {
    id: "p4",
    title: "Beer",
    price: 2.5,
    src: "data:image/jpeg;base64,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",
  },
  {
    id: "p5",
    title: "Cola",
    price: 1.5,
    src: "data:image/jpeg;base64,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",
  },
  {
    id: "p6",
    title: "Sprite",
    price: 1.5,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEhDgbMjN17sVC1SLE7dhG7n3J59U4ZfBOEA&s",
  },
];

function ProductList() {
  return (
    <div className={classes.productContainer}>
      <Card>
        <ul>
          {DUMMY_PRODUCTS.map((pro) => (
            <Product
              key={pro.id}
              item={{
                id: pro.id,
                title: pro.title,
                price: pro.price,
                src: pro.src,
              }}
            />
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default ProductList;
