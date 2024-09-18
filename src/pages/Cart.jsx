import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  console.log(carts, totalAmount, itemCount);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts.length === 0 ? (
        <p>Kartınız boş...</p>
      ) : (
        carts?.map((cart, i) => <CartComp key={i} cart={cart} />)
      )}{" "}
      {carts.length > 0 && (
        <div className="flex items-center justify-end  text-2xl   ">
          Toplam Tutar: <span className="ml-2">{totalAmount} ₺</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
