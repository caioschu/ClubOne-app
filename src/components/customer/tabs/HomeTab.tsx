import React from 'react';
import { Wifi, CreditCard, Gift, Zap, Crown } from 'lucide-react';
import { formatCurrency } from '../../../utils/formatters';

interface HomeTabProps {
  customer: any;
  mockOffers: any[];
}

const HomeTab: React.FC<HomeTabProps> = ({ customer, mockOffers }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Status Atual */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span className="font-semibold text-sm sm:text-base">Ativo na {customer.currentVenue}</span>
          </div>
          <Wifi className="w-5 h-5" />
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
          <div>
            <div className="text-green-100">Entrada</div>
            <div className="font-bold">{customer.entryTime}</div>
          </div>
          <div>
            <div className="text-green-100">Mesa</div>
            <div className="font-bold">{customer.tableNumber}</div>
          </div>
          <div>
            <div className="text-green-100">Gasto hoje</div>
            <div className="font-bold">R$ 89,50</div>
          </div>
          <div>
            <div className="text-green-100">Pontos ganhos</div>
            <div className="font-bold">+89 pts</div>
          </div>
        </div>
      </div>

      {/* Saldo */}
      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base sm:text-lg font-bold text-gray-900">Saldo Disponível</h3>
          <CreditCard className="w-6 h-6 text-purple-600" />
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          {formatCurrency(customer.balance)}
        </div>
        <button className="w-full bg-purple-600 text-white py-2 sm:py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors text-sm sm:text-base">
          + Adicionar Créditos
        </button>
      </div>

      {/* Ofertas Personalizadas */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base sm:text-lg font-bold text-gray-900">Ofertas Exclusivas</h3>
          <Gift className="w-6 h-6 text-purple-600" />
        </div>
        
        {mockOffers.map((offer) => (
          <div key={offer.id} className={`rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 ${
            offer.type === 'flash' ? 'bg-orange-50 border-orange-200' :
            offer.type === 'upgrade' ? 'bg-purple-50 border-purple-200' :
            'bg-blue-50 border-blue-200'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                {offer.type === 'flash' && <Zap className="w-4 h-4 text-orange-600" />}
                {offer.type === 'upgrade' && <Crown className="w-4 h-4 text-purple-600" />}
                {offer.type === 'combo' && <Gift className="w-4 h-4 text-blue-600" />}
                <span className="font-bold text-gray-900 text-sm sm:text-base">{offer.title}</span>
              </div>
              {offer.timeLeft && (
                <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full font-bold whitespace-nowrap">
                  {offer.timeLeft}
                </span>
              )}
            </div>
            <p className="text-gray-700 mb-3 text-sm sm:text-base">{offer.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-base sm:text-lg font-bold text-green-600">
                  {formatCurrency(offer.offerPrice)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {formatCurrency(offer.originalPrice)}
                </span>
              </div>
              <button className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-white text-sm sm:text-base ${
                offer.type === 'flash' ? 'bg-orange-600 hover:bg-orange-700' :
                offer.type === 'upgrade' ? 'bg-purple-600 hover:bg-purple-700' :
                'bg-blue-600 hover:bg-blue-700'
              }`}>
                Resgatar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTab;