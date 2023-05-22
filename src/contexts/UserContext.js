import { createContext, useState } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage('userData', {});
  const [paymentEnvironment, setPaymentEnvironment] = useState(false);
  const [finalPrice, setFinalPrice] = useState('');
  const [description, setDescription] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [paymentConfirmed, setPaymentConfirmed] = useState('');
  return (
    <UserContext.Provider value={{ userData, setUserData, paymentEnvironment, setPaymentEnvironment, finalPrice, setFinalPrice, description, setDescription, ticketType, setTicketType, paymentConfirmed, setPaymentConfirmed }}>
      {children}
    </UserContext.Provider>
  );
}
