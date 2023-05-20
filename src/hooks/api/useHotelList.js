import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelListApi from '../../services/hotelApi';

export default function useHotelList() {
  const token = useToken();

  const {
    data: hotelList,
    loading: hotelListLoading,
    error: hotelListError,
    act: getHotelList,
  } = useAsync(() => hotelListApi.getHotelList(token));
  
  return {
    hotelList,
    hotelListLoading,
    hotelListError,
    getHotelList,
  };
}
