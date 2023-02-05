import React, { useEffect } from "react";
import { Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../components/Style.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { REMOVE } from "../redux/Actions/Action";

import CartReducer from "../redux/Reducers/reducer";

export default function Header() {
  const getData = useSelector((state) => state.CartReducer.cart);
  console.log(getData);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setopen] = React.useState(false);
  const [total, setTotal] = React.useState(0);
  console.log(total);
  const dispatch = useDispatch();
  const handleClose = () => {
    setAnchorEl(null);
    setopen(false);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setopen(true);
  };
 
  const delt = (id) => { 
    dispatch(REMOVE(id));
  }
  const total_Price=()=>{ 
    let Price = 0;
    getData.map((elem,k) => {
      console.log(elem.price);
      Price = elem.price*elem.qnty + Price;
    });
    setTotal(Price);
  }
  useEffect(() => { total_Price(); },[total_Price])
  return (
    <div className="header">
      <NavLink className="home" to="/">
        Delicious Khao
      </NavLink>
      <Badge
        className="logo"
        color="primary"
        badgeContent={getData.length}
        showZero
        onClick={handleClick}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png"
          width="30px"
          height="30px"
          alt="cart-logo"
        />
      </Badge>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {getData.length ? (
          <div className="item-cart">
            <table>
              <thead>
                <tr>
                  <th>All Items</th>
                </tr>                             
              </thead>
              <hr/> 
              <tbody>
                {getData.map((val) => {
                  return (
                    <div className="added-all-item" key={val.id}>
                      <tr className="added-item">
                        <td >
                          <NavLink to={`/ItemsDetails/${val.id}`}  onClick={handleClose}>
                          <img
                            className="add-img"
                            src={val.imgdata}
                            style={{ width: "5rem", height: "5rem", cursor: "pointer" }}
                            alt="img"
                          />
                        </NavLink>                          
                        </td>
                        <td className="add-item-detail">
                          <p>{val.rname}</p>
                          <p>Price : ₹{val.price}</p>
                          <p>Quantity : {val.qnty}</p>
                        </td>
                        <td className="delete-item" onClick={()=>delt(val.id)}>
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png"
                            style={{ width: "2rem", height: "2rem",cursor:"pointer"}}
                            alt="img" onClick={()=>delt(val.id)}
                          />
                        </td>
                      </tr>
                      <hr size="4" noshade/>
                    </div>
                    
                  );
                })}
              </tbody>
              <thead>Total : ₹{total}</thead>
            </table>
          </div>
        ) : (
          <img
            className="empty-cart"
            onClick={handleClose}
            src="./PngItem_4803503 (1).png"
            alt="empty-cart"
          />
        )}
      </Menu>
    </div>
  );
}
