import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesRoomsApi from '../../services/activityApi';

export default function useActivitiesRooms() {
  const token = useToken();

  const {
    data: activitiesRooms,
    loading: activitiesRoomsLoading,
    error: activitiesRoomsError,
    act: getActivitiesRooms,
  } = useAsync(() => activitiesRoomsApi.getActivitiesRooms(token));

  return {
    activitiesRooms,
    activitiesRoomsLoading,
    activitiesRoomsError,
    getActivitiesRooms,
  };
}
