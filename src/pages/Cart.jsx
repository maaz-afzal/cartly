import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } =
    useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Shopping</span>
        </button>

        <div className="text-center py-16">
          <ShoppingBag
            size={80}
            className="mx-auto text-gray-300 dark:text-gray-600 mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Looks like you haven't added any items yet
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-900 dark:bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-600 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
      >
        <ArrowLeft size={20} />
        <span>Continue Shopping</span>
      </button>

      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md transition"
            >
              <div className="w-24 h-24 bg-gray-50 dark:bg-gray-700 rounded-lg p-2 shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {item.category}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div>
                    <span className="text-gray-400 dark:text-gray-500 text-sm">
                      Price
                    </span>
                    <p className="font-bold text-gray-900 dark:text-white">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-full border border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white flex items-center justify-center transition text-gray-900 dark:text-white"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-8 text-center font-medium text-gray-900 dark:text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-full border border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white flex items-center justify-center transition text-gray-900 dark:text-white"
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  <div>
                    <span className="text-gray-400 dark:text-gray-500 text-sm">
                      Total
                    </span>
                    <p className="font-bold text-gray-900 dark:text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sticky top-8">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 border-b border-gray-200 dark:border-gray-700 pb-4">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal ({getTotalItems()} items)</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Shipping</span>
                <span className="text-green-600 dark:text-green-400">Free</span>
              </div>
            </div>

            <div className="flex justify-between mt-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <span className="font-bold text-gray-900 dark:text-white">
                Total
              </span>
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-gray-900 dark:bg-gray-700 text-white py-3 rounded-full font-medium mt-6 hover:bg-gray-800 dark:hover:bg-gray-600 transition">
              Proceed to Checkout
            </button>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
              Free shipping on all orders
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
