import React from "react";
import Cardsdata from "./FoodData";
import { ADD } from "../redux/Actions/Action.js";
import { useDispatch } from "react-redux";

export default function AllItems() {
  const [food, setfood] = React.useState(Cardsdata);

  const dispatch = useDispatch();

  const add = (element) => { 
    dispatch(ADD(element));

  }
  return (
    <div >
      <h1>Add to Cart Projects</h1>
      <div className="card">
        {food.map((values, id) => {
          return (
            <div className="item" key={ values.id}>
              <img
                      src={ values.imgdata}
                alt="Avatar"
                width=""
                height="300px"
              />
              <div className="container">
                <h4>
                          <b className="card-title">{ values.rname}</b>
                </h4>
                      <p className="title">Price : ₹ { values.price}</p>

                <div className="nav-links">
                  <button onClick={()=>add(values)}>Add To Cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
