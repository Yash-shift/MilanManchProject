import { useState } from 'react';

const PaymentPage = () => {
  const [amount] = useState(999.99);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const paymentData = {
        userId: localStorage.getItem('userId'),
        paymentId: `pay_${Date.now()}`,
        amount,
        currency: 'INR',
        transactionDetails: {
          method: paymentMethod,
          ...(paymentMethod === 'upi' ? { upiId } : { 
            cardNumber: cardNumber.slice(-4),
            expiryDate 
          })
        }
      };

      const response = await fetch('http://localhost:3000/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentData)
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        setUpiId('');
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
      }
    } catch (error) {
      setMessage('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-6 bg-white border-b border-gray-200">
            <h2 className="text-2xl font-bold text-center text-gray-800">Payment Details</h2>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Amount Display */}
            <div className="mb-8 text-center">
              <p className="text-lg text-gray-600">Amount to Pay</p>
              <p className="text-4xl font-bold text-green-600">₹{amount.toFixed(2)}</p>
            </div>

            <form onSubmit={handlePayment} className="space-y-6">
              {/* Payment Method Selection */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className={`p-4 border-2 rounded-lg flex flex-col items-center justify-center space-y-2 hover:bg-gray-50 transition-colors ${
                    paymentMethod === 'card' ? 'border-blue-500' : 'border-gray-200'
                  }`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                  <span className={`font-medium ${paymentMethod === 'card' ? 'text-blue-500' : 'text-gray-600'}`}>
                    Card
                  </span>
                </button>

                <button
                  type="button"
                  className={`p-4 border-2 rounded-lg flex flex-col items-center justify-center space-y-2 hover:bg-gray-50 transition-colors ${
                    paymentMethod === 'upi' ? 'border-blue-500' : 'border-gray-200'
                  }`}
                  onClick={() => setPaymentMethod('upi')}
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
                    <path d="m12 4 4 16M8 4l4 16" />
                  </svg>
                  <span className={`font-medium ${paymentMethod === 'upi' ? 'text-blue-500' : 'text-gray-600'}`}>
                    UPI
                  </span>
                </button>
              </div>

              {/* Payment Forms */}
              {paymentMethod === 'card' ? (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      id="cardNumber"
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="4111 1111 1111 1111"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      maxLength="19"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        id="expiry"
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        maxLength="5"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <input
                        id="cvv"
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        maxLength="3"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <label htmlFor="upiId" className="block text-sm font-medium text-gray-700 mb-1">
                    UPI ID
                  </label>
                  <input
                    id="upiId"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="username@upi"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                  />
                </div>
              )}

              {/* Message Display */}
              {message && (
                <div className={`p-4 rounded-lg ${message.includes('failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors ${
                  loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {loading ? 'Processing...' : `Pay ₹${amount.toFixed(2)}`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;