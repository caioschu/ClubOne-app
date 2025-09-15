import React from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { formatCurrency } from '../../../utils/formatters';
import toast from 'react-hot-toast';

interface MenuTabProps {
  mockProducts: any[];
  cart: any[];
  onAddToCart: (product: any) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onProcessOrder: () => void;
  getTotalAmount: () => number;
}

const MenuTab: React.FC<MenuTabProps> = ({
  mockProducts,
  cart,
  onAddToCart,
  onUpdateQuantity,
  onProcessOrder,
  getTotalAmount
}) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-bold text-gray-900">Cardápio Digital</h3>
        <div className="flex items-center space-x-2">
          <ShoppingCart className="w-5 h-5 text-purple-600" />
          <span className="bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {cart.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {mockProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-100">
            <div className="text-center mb-2 sm:mb-3">
              <h4 className="font-bold text-gray-900 text-xs sm:text-sm">{product.name}</h4>
              <p className="text-xs text-gray-600">{product.category}</p>
            </div>
            <div className="text-center mb-2 sm:mb-3">
              <span className="text-sm sm:text-lg font-bold text-purple-600">
                {formatCurrency(product.price)}
              </span>
            </div>
            <button
              onClick={() => onAddToCart(product)}
              className="w-full bg-purple-600 text-white py-1.5 sm:py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-xs sm:text-sm"
            >
              Adicionar
            </button>
          </div>
        ))}
      </div>

      {/* Carrinho */}
      {cart.length > 0 && (
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
          <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Seu Pedido</h4>
          <div className="space-y-3 mb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex-1">
                  <span className="font-medium text-gray-900 text-sm sm:text-base">{item.name}</span>
                  <div className="text-sm text-gray-600">
                    {formatCurrency(item.price)} cada
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-6 sm:w-8 text-center font-bold text-sm sm:text-base">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-base sm:text-lg font-bold">Total:</span>
              <span className="text-xl sm:text-2xl font-bold text-purple-600">
                {formatCurrency(getTotalAmount())}
              </span>
            </div>
            <button
              onClick={onProcessOrder}
              className="w-full bg-green-600 text-white py-2 sm:py-3 rounded-xl font-bold hover:bg-green-700 transition-colors text-sm sm:text-base"
            >
              Confirmar Pedido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuTab;