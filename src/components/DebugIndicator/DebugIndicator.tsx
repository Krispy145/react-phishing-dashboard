import React from 'react';
import { isDebugMode, isFeatureEnabled } from '../../config/debug';
import { useTheme } from '../../theme/ThemeProvider';
import { DebugBadge, DebugContainer } from './DebugIndicator.styles';

export const DebugIndicator: React.FC = () => {
  const { theme } = useTheme();

  if (!isDebugMode()) {
    return null;
  }

  return (
    <DebugContainer theme={theme}>
      <DebugBadge theme={theme}>🐛 DEBUG</DebugBadge>
      {isFeatureEnabled('ADMIN_OVERRIDE') && (
        <DebugBadge theme={theme} $variant="admin">
          🔑 ADMIN
        </DebugBadge>
      )}
    </DebugContainer>
  );
};
