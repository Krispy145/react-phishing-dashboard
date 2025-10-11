import { create } from 'zustand'
import { api } from '../shared/api'

type Tokens = { accessToken: string | null; refreshToken: string | null }
type Creds = { email: string; password: string }

type AuthState = {
  accessToken: string | null
  refreshToken: string | null
  setTokens: (t: Tokens) => void
  logout: () => void
  login: (c: Creds) => Promise<boolean>
  refresh: () => Promise<string | null>
}

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: null,
  refreshToken: null,
  setTokens: ({ accessToken, refreshToken }) => set({ accessToken, refreshToken }),
  logout: () => set({ accessToken: null, refreshToken: null }),
  login: async ({ email, password }) => {
    try {
      const { data } = await api.post('/auth/login', { email, password })
      set({ accessToken: data.access_token, refreshToken: data.refresh_token })
      return true
    } catch {
      return false
    }
  },
  refresh: async () => {
    const rt = get().refreshToken
    if (!rt) return null
    try {
      const { data } = await api.post('/auth/refresh', { refresh_token: rt })
      set({ accessToken: data.access_token, refreshToken: data.refresh_token ?? rt })
      return data.access_token as string
    } catch {
      set({ accessToken: null, refreshToken: null })
      return null
    }
  },
}))