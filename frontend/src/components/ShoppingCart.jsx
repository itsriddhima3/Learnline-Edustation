import React from 'react';
import { ShoppingCart as CartIcon, Trash2 } from 'lucide-react';

const ShoppingCart = ({ cart, removeFromCart }) => {
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="bg-white rounded-lg shadow p-5 sticky top-6">
     
      <div className="flex items-center gap-2 mb-4">
        <CartIcon className="text-blue-600" size={24} />
        <h2 className="text-xl font-bold">Shopping Cart</h2>
      </div>


      {cart.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Your cart is empty</p>
      ) : (
        <>
          
          <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
            {cart.map(item => (
              <div key={item.id} className="border-b pb-3">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition"
                    aria-label="Remove item from cart"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <p className="text-blue-600 font-semibold">
                  ${item.price} × {item.quantity} = ${item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

       
          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total:</span>
              <span className="text-blue-600">${total}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;