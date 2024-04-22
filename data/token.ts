import { User } from '@/types/types';
import axios from 'axios';

export const getToken = async (refreshToken: string): Promise<User | null> => {
  const res = await axios({
    method: 'POST',
    url: 'http://localhost:3010/auth/refresh',
    data: { refreshToken },
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const User = await res.data;
  if(!User) return null;
  return User;
};