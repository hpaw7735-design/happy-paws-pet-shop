"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl border border-slate-200 p-12 text-center animate-scaleIn">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-scaleIn">
            <span className="text-5xl">✓</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-slate-900 tracking-tight">
            Order Placed!
          </h1>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Thank you for your order. This is a preview checkout - no payment was processed.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <span>Continue Shopping</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="text-8xl mb-6">🛒</div>
          <h1 className="text-4xl font-bold mb-4 text-slate-900 tracking-tight">
            Your Cart is Empty
          </h1>
          <p className="text-slate-600 text-lg mb-8">
            Add some products to your cart to continue shopping.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <span>Browse Products</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">Checkout</h1>
          <p className="text-xl text-slate-600">{cart.length} items in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 flex gap-6 transition-all duration-500 hover:shadow-2xl animate-slideUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl w-28 h-28 flex items-center justify-center flex-shrink-0">
                  <span className="text-5xl">{item.emoji || "📦"}</span>
                </div>

                <div className="flex-grow">
                  <h3 className="font-bold text-xl mb-2 text-slate-900 tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-10 h-10 rounded-xl border-2 border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 font-bold"
                    >
                      −
                    </button>
                    <span className="font-bold text-lg w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-10 h-10 rounded-xl border-2 border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 font-bold"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto px-4 py-2 text-red-600 hover:bg-red-50 rounded-xl font-semibold transition-all duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-2xl text-slate-900 mb-1">
                    €{(item.price * item.quantity).toFixed(2)}
                  </p>
                  <p className="text-sm text-slate-500">
                    €{item.price.toFixed(2)} each
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 sticky top-24 animate-slideUp" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-bold mb-6 text-slate-900 tracking-tight">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">€{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t-2 border-slate-100 pt-4">
                  <div className="flex justify-between text-2xl font-bold text-slate-900">
                    <span>Total</span>
                    <span>€{cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full px-6 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl mb-4"
              >
                Place Order
              </button>

              <p className="text-xs text-slate-500 text-center">
                This is a preview checkout. No payment will be processed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
