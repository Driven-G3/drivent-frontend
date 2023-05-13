import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function useProcessPayment() {
  const token = useToken();

  const {
    data: payment,
    loading: processPaymentLoading,
    error: processPaymentError,
    act: processPayment,
  } = useAsync((body) => paymentApi.processPayment(body, token), false);

  return {
    payment,
    processPaymentLoading,
    processPaymentError,
    processPayment,
  };
}
