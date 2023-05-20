import api from './api';

export async function getHotelList(token) {
  const response = await api.get('/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getRoomListByHotelId(token) {}

//
