import { FC } from "react";
import '../style.css';

interface Product {
  id: number,
  imageURL: string,
  name: string,
  type: string,
  price: number,
  currency: string,
  color: string,
  gender: string,
  quantity: number
}

let Products: Product[] = [
  {
    "id": 1,
    "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png",
    "name": "Black Polo",
    "type": "Polo",
    "price": 250,
    "currency": "INR",
    "color": "Black",
    "gender": "Men",
    "quantity": 3
  },
  {
    "id": 2,
    "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-polo-women.png",
    "name": "Blue Polo",
    "type": "Polo",
    "price": 350,
    "currency": "INR",
    "color": "Blue",
    "gender": "Women",
    "quantity": 3
  }
];

let productList = Products.map(product => {
  return (<li key = {product.id}>
    <img src = {product.imageURL} />
    <div className = "price-block">
      <span>Rs {product.price}</span>
      <span>
        <button>Add to Cart</button>
      </span>
    </div>
  </li>)
});

export const Content: FC = ()=>{
  return (<ul>
    {productList}
  </ul>)
}