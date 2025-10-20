export interface AppConfig {
  api: {
    baseUrl: string;
    timeout: number;
    retries: number;
  };
  features: {
    enableAnalytics: boolean;
    enableRealTimeUpdates: boolean;
    enableNotifications: boolean;
  };
  debug: {
    enabled: boolean;
    logLevel: 'error' | 'warn' | 'info' | 'debug';
  };
}

export const defaultConfig: AppConfig = {
  api: {
    baseUrl: process.env.VITE_API_BASE_URL || 'http://localhost:8000',
    timeout: 10000,
    retries: 3,
  },
  features: {
    enableAnalytics: true,
    enableRealTimeUpdates: true,
    enableNotifications: true,
  },
  debug: {
    enabled: import.meta.env.DEV || import.meta.env.VITE_DEBUG === 'true',
    logLevel: import.meta.env.DEV ? 'debug' : 'error',
  },
};

export const getConfig = (): AppConfig => {
  return {
    ...defaultConfig,
    // Override with environment variables if available
    api: {
      ...defaultConfig.api,
      baseUrl: import.meta.env.VITE_API_BASE_URL || defaultConfig.api.baseUrl,
    },
    debug: {
      ...defaultConfig.debug,
      enabled: import.meta.env.DEV || import.meta.env.VITE_DEBUG === 'true',
    },
  };
};
