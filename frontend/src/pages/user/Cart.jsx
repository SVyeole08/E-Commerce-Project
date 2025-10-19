import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncupdateusers } from "../../store/actions/UserActions";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const cart = Array.isArray(users?.cart) ? users.cart.filter(Boolean) : [];

  const IncreaseQtyHandler = (index) => {
    if (!users) return;

    const newCart = [...cart];
    const item = newCart[index];
    if (!item) return;
    const currentQty = Number(item.quantity) || 0;
    newCart[index] = { ...item, quantity: currentQty + 1 };

    const copyuser = { ...users, cart: newCart };
    dispatch(asyncupdateusers(copyuser.id, copyuser));
  };

  const DecreaseQtyHandler = (index) => {
    if (!users || !Array.isArray(users.cart)) return;

    const newCart = [...cart];
    const item = newCart[index];
    if (!item) return;

    const currentQty = Number(item.quantity) || 0;
    if (currentQty > 1) {
      newCart[index] = { ...item, quantity: currentQty - 1 };
    } else {
      newCart.splice(index, 1);
    }

    const copyuser = { ...users, cart: newCart };
    dispatch(asyncupdateusers(copyuser.id, copyuser));
  };

  if (!cart.length) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg border p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <img
              src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"
              alt="empty cart"
              className="w-48 h-48 object-cover rounded-md"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">
              Your cart is feeling empty
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Looks like you haven't added anything to your cart yet. Find
              products you love and they will appear here.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <button
                onClick={() => navigate("/")}
                className="px-5 py-2 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition w-full sm:w-auto"
              >
                Shop Products
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const cartItems = cart.map((c, index) => (
    <li
      className="flex justify-between bg-gray-500 rounded-md mx-6 gap-6 mb-2 p-3"
      key={c?.product?.id ?? index}
    >
      <img
        className="w-[9vmax] h-[9vmax] object-cover rounded "
        src={c?.product?.image ?? ""}
        alt={c?.product?.title ?? "product"}
      />
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-2xl font-semibold">{c?.product?.title}</h1>
        <h1 className="text-lg text-green-400">
          Price(₹): {c?.product?.price}
        </h1>
        <h1 className="text-[14px] font-semibold border-1 gap-2 flex items-center border-[aqua] text-black px-3 py-1 rounded-lg bg-white">
          <button
            onClick={() => IncreaseQtyHandler(index)}
            className="text-lg cursor-pointer"
          >
            +
          </button>
          Quantity:<span className="text-blue-500">{c?.quantity}</span>
          <button
            onClick={() => DecreaseQtyHandler(index)}
            className="text-lg cursor-pointer"
          >
            -
          </button>
        </h1>
      </div>
    </li>
  ));

  return (
    <div>
      <ul>{cartItems}</ul>
    </div>
  );
};

export default Cart;
