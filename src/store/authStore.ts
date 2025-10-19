import { create } from 'zustand';
import { api } from '../shared/api';

type Tokens = { accessToken: string | null; refreshToken: string | null };
type Creds = { email: string; password: string };

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (t: Tokens) => void;
  logout: () => void;
  login: (c: Creds) => Promise<boolean>;
  refresh: () => Promise<string | null>;
  adminOverride: () => void;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: 'dev-token',
  refreshToken: 'dev-refresh-token',
  setTokens: ({ accessToken, refreshToken }) => set({ accessToken, refreshToken }),
  logout: () => set({ accessToken: null, refreshToken: null }),
  login: async ({ email, password }) => {
    return true;
  },
  refresh: async () => {
    const rt = get().refreshToken;
    if (!rt) return null;
    try {
      const { data } = await api.post('/auth/refresh', { refresh_token: rt });
      set({ accessToken: data.access_token, refreshToken: data.refresh_token ?? rt });
      return data.access_token as string;
    } catch {
      set({ accessToken: null, refreshToken: null });
      return null;
    }
  },
  adminOverride: () => {
    // Only allow in debug mode
    if (import.meta.env.VITE_DEBUG === 'true') {
      set({
        accessToken: 'admin-override-token',
        refreshToken: 'admin-override-refresh-token',
      });
    }
  },
}));
