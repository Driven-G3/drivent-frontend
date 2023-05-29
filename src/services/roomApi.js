import api from './api';

export async function getRoomList(token) {
  const response = await api.get('/rooms', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getRoomListByRoomId(token) {}

//
