import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, ArrowRight, Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const EmptyCartIllustration = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60 60L44.8 20H20"
      stroke="#CBD5E0"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M180 60H60L74.8 100H154.4C157.6 100 160.4 97.6 161.2 94.4L180 20"
      stroke="#CBD5E0"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <circle cx="80" cy="160" r="20" stroke="#CBD5E0" strokeWidth="8" />
    <circle cx="160" cy="160" r="20" stroke="#CBD5E0" strokeWidth="8" />
    <path
      d="M100 80C100 62.4 114.4 48 132 48C149.6 48 164 62.4 164 80"
      stroke="#3182CE"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M140 80C140 71.2 148 64 157.6 64"
      stroke="#3182CE"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
);

const CartSidebar = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    itemCount,
    isCartOpen,
    toggleCart,
    clearCart,
  } = useCart();

  // Calculate delivery fee (free for orders over ₹2000)
  const deliveryFee = cartTotal > 2000 ? 0 : 50;
  const totalWithDelivery = cartTotal + deliveryFee;

  return (
    <div className={`fixed inset-0 z-50 ${isCartOpen ? "block" : "hidden"}`}>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-300"
        onClick={toggleCart}
      />

      {/* Cart Panel */}
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="border-b p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <ShoppingCart size={20} className="text-blue-600" />
              <h3 className="text-xl font-bold">Your Cart ({itemCount})</h3>
            </div>
            <div className="flex items-center gap-2">
              {cartItems.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1"
                >
                  <Trash2 size={16} />
                  <span>Clear</span>
                </button>
              )}
              <button
                onClick={toggleCart}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 flex flex-col items-center h-full justify-center">
                <EmptyCartIllustration />
                <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
                <Link
                  to="/products"
                  onClick={toggleCart}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  <ShoppingCart size={18} />
                  <span>Start Shopping</span>
                </Link>
              </div>
            ) : (
              <ul className="divide-y">
                {cartItems.map((item) => (
                  <li key={`${item.id}-${item.addedAt}`} className="py-4">
                    <div className="flex gap-4">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={toggleCart}
                        className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <Link
                            to={`/product/${item.id}`}
                            onClick={toggleCart}
                            className="font-medium hover:text-blue-600"
                          >
                            {item.name}
                          </Link>
                          <span className="font-bold">₹{item.price}</span>
                        </div>

                        {item.size && (
                          <p className="text-xs text-gray-500 mt-1">
                            Size: {item.size}
                          </p>
                        )}

                        <div className="flex justify-between items-center mt-3">
                          <div className="flex items-center border rounded-md overflow-hidden">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 w-10 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1"
                          >
                            <Trash2 size={14} />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-4 bg-gray-50">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-medium">
                    {deliveryFee === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `₹${deliveryFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Total</span>
                  <span>₹{totalWithDelivery.toFixed(2)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                onClick={toggleCart}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-center font-medium transition-colors flex items-center justify-center gap-2"
              >
                Proceed to Checkout
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/products"
                onClick={toggleCart}
                className="block mt-3 text-center text-blue-600 hover:text-blue-800 hover:underline text-sm"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
