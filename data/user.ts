import { User } from '@/types/types';
import axios from 'axios';

export const getUser = async (email: string, password: string): Promise<User | null> => {
  const res = await axios({
    method: 'POST',
    url: 'http://localhost:3010/auth/login',
    data: { email, password },
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const User = await res.data;
  if(!User) return null;
  return User;
};