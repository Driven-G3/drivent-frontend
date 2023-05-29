import useAsync from '../useAsync';
import useToken from '../useToken';

import * as roomListApi from '../../services/roomApi';

export default function useHotelList() {
  const token = useToken();

  const {
    data: roomList,
    loading: roomListLoading,
    error: roomListError,
    act: getRoomList,
  } = useAsync(() => roomListApi.getRoomList(token));
  
  return {
    roomList,
    roomListLoading,
    roomListError,
    getRoomList,
  };
}
