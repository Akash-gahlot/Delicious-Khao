import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { REMOVE ,ADD ,INDREMOVE} from "../redux/Actions/Action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ItemDetail() {
  const [data, setData] = React.useState([]);
  const getData = useSelector((state) => state.CartReducer.cart);
  const [itemtotal, setitemtotal] = React.useState(0);
  const { id } = useParams();
  const compare = () => {
    let data = getData.filter((val) => {
      return val.id == id;
    });
    setData(data);
  };
  const dispatch = useDispatch();
  const history = useNavigate();
  const delt = (id) => {
    dispatch(REMOVE(id));
    history("/");
  };
  useEffect(() => {
    compare();
  }, [id]);
  const total = () => { 
    let price = 0;
      data.map((val) => {
      price = val.price * val.qnty + price;
    });
    setitemtotal(price);
  }
  useEffect(() => { total(); }, [total])

  //increase element
  const add = (element) => { 
    dispatch(ADD(element));

  }
  //decrease element
  const remove=(element) => { 
    dispatch(INDREMOVE(element));
    // if(itemtotal<1){
    //   history("/");
    // }
  }
  
  return (
    <div className="item-page">
      <h2>Item Detail Page</h2>
      {data.map((elem) => {
        return (
          <div className="item-card">
            <img className="item-image" src={elem.imgdata} />
            <div className="item-info">
              <div className="section1">
                <span className="item-restaurant">
                  <p>
                    <b>Restaurant</b> : {elem.rname}
                  </p>
                </span>
                <span className="item-Price">
                  <p>
                    <b>Price</b> : ₹{elem.price}
                  </p>
                </span>
                <span className="item-Dishes">
                  <p>
                    <b>Dishes</b> : {elem.address}
                  </p>
                </span>
                <span className="item-Total">
                  <p>
                    <b>Total</b> : ₹{itemtotal}
                  </p>
                </span>
              </div>
              <div className="section2">
                <p className="item-Rating">
                  <strong>Rating</strong> :
                  <span className="item-rating">{elem.rating} ★</span>
                </p>
                <span className="item-OrderReview">
                  <p>
                    <b>Order Review</b> : {elem.somedata}
                  </p>
                </span>
                <span className="item-Remove">
                  <p>
                    <b>Remove</b> :
                    <img
                      className="remove"
                      src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png"
                      alt="remove"
                      height="30px"
                      width="40px"
                      cursor="pinter"
                      onClick={() => delt(elem.id)}
                    ></img>
                  </p>
                </span>
                <div className="item-count">
                  <span className="minus" onClick={elem.qnty<=1?()=>delt(elem.id):()=>remove(elem)}>-</span>
                  <span className="count">{ elem.qnty}</span>
                  <span className="plus" onClick={()=>add(elem)}>+</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
