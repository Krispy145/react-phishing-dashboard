// Debug configuration
export const DEBUG_CONFIG = {
  // Enable debug mode - only when VITE_DEBUG is explicitly 'true'
  ENABLED: import.meta.env.VITE_DEBUG === 'true',

  // Debug features
  FEATURES: {
    ADMIN_OVERRIDE: true,
    ROUTE_LOGGING: true,
    AUTH_BYPASS: false, // Don't bypass auth, just add override button
    CONSOLE_LOGS: true,
  },

  // Admin override settings
  ADMIN: {
    OVERRIDE_BUTTON_TEXT: 'Admin Override',
    OVERRIDE_BUTTON_VARIANT: 'outline' as const,
    OVERRIDE_BUTTON_SIZE: 'sm' as const,
  },
};

// Helper functions
export const isDebugMode = () => DEBUG_CONFIG.ENABLED;
export const isFeatureEnabled = (feature: keyof typeof DEBUG_CONFIG.FEATURES) =>
  DEBUG_CONFIG.ENABLED && DEBUG_CONFIG.FEATURES[feature];

// Debug logging
export const debugLog = (message: string, ...args: any[]) => {
  if (isFeatureEnabled('CONSOLE_LOGS')) {
    console.log(`[DEBUG] ${message}`, ...args);
  }
};

// Route logging
export const debugRoute = (from: string, to: string) => {
  if (isFeatureEnabled('ROUTE_LOGGING')) {
    debugLog(`Route change: ${from} → ${to}`);
  }
};
