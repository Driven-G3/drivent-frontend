import { createContext, useState } from 'react';

const PaymentContext = createContext();
export default PaymentContext;

export function PaymentProvider({ children }) {
  const [paymentEnvironment, setPaymentEnvironment] = useState(false);
  const [confirmedPayment, setConfirmedPayment] = useState(false);
  const [finalPrice, setFinalPrice] = useState('');
  const [description, setDescription] = useState('');
  return (
    <PaymentContext.Provider
      value={{
        confirmedPayment,
        setConfirmedPayment,
        paymentEnvironment,
        setPaymentEnvironment,
        finalPrice,
        setFinalPrice,
        description,
        setDescription,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
