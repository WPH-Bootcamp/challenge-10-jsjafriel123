import api from '@/lib/axios';

// ************* REGISTER ***************
export type RegisterPayload = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  id: number;
  email: string;
  username: string;
};

export async function registerUser(
  payload: RegisterPayload
): Promise<RegisterResponse> {
  const res = await api.post('/auth/register', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.data;
}
// ************* LOGIN ***************
export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export async function loginUser(payload: LoginPayload): Promise<LoginResponse> {
  const res = await api.post('/auth/login', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.data;
}
