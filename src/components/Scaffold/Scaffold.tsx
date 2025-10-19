import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { isDebugMode, isFeatureEnabled } from '../../config/debug';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { useTheme } from '../../theme/ThemeProvider';
import { ThemeToggle } from '../ThemeToggle';
import {
  AppBar,
  AppBarActions,
  AppBarContent,
  AppBarLeft,
  AppBarTitle,
  BackButton,
  Body,
  BottomNavIcon,
  BottomNavigation,
  BottomNavItem,
  BottomNavLabel,
  CollapsedDrawerContent,
  CollapsedDrawerFooter,
  CollapsedDrawerHeader,
  CollapsedDrawerItem,
  Content,
  DebugRow,
  DesktopSidebar,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerItem,
  FloatingActionButton,
  Overlay,
  ScaffoldContainer,
} from './Scaffold.styles';

export interface BottomNavItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

export interface FloatingActionButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

export interface DrawerItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface ScaffoldProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  appBarActions?: React.ReactNode;
  bottomNavigation?: BottomNavItem[];
  floatingActionButton?: FloatingActionButtonProps;
  drawer?: {
    items: DrawerItem[];
    header?: React.ReactNode;
    footer?: React.ReactNode;
  };
  bodyPadding?: boolean;
  collapsedSidebarWidth?: string;
  disableToggleButtons?: boolean;
  isSidebarCollapsed?: boolean;
  onSidebarToggle?: () => void;
}

export const Scaffold: React.FC<ScaffoldProps> = ({
  children,
  title,
  showBackButton = false,
  onBack,
  appBarActions,
  bottomNavigation,
  floatingActionButton,
  drawer,
  bodyPadding = true,
  collapsedSidebarWidth = '4rem',
  disableToggleButtons = false,
  isSidebarCollapsed: externalIsSidebarCollapsed,
  onSidebarToggle,
}) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const breakpoint = useBreakpoint();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [internalIsSidebarCollapsed, setInternalIsSidebarCollapsed] = useState(false);

  // Use external state if provided, otherwise use internal state
  const isSidebarCollapsed =
    externalIsSidebarCollapsed !== undefined
      ? externalIsSidebarCollapsed
      : internalIsSidebarCollapsed;

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  const handleDrawerItemClick = (item: DrawerItem) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.path) {
      navigate(item.path);
    }
    // Only close drawer on mobile/tablet
    if (breakpoint === 'mobile' || breakpoint === 'tablet') {
      setIsDrawerOpen(false);
    }
  };

  const handleSidebarToggle = () => {
    if (breakpoint === 'mobile' || breakpoint === 'tablet') {
      // Mobile/tablet: toggle overlay drawer
      setIsDrawerOpen(!isDrawerOpen);
    } else {
      // Desktop: toggle sidebar collapse
      if (onSidebarToggle) {
        onSidebarToggle();
      } else {
        setInternalIsSidebarCollapsed(!internalIsSidebarCollapsed);
      }
    }
  };

  // Determine if we should show the hamburger menu (mobile/tablet)
  const shouldShowHamburger =
    drawer && (breakpoint === 'mobile' || breakpoint === 'tablet') && !disableToggleButtons;

  // Determine if we should show the sidebar toggle (desktop)
  const shouldShowSidebarToggle = drawer && breakpoint === 'desktop' && !disableToggleButtons;

  // Debug: Always show toggle button in debug mode for testing
  const debugShowToggle = isDebugMode() && !!drawer && !disableToggleButtons;

  // Ensure only one button shows at a time
  const showHamburger = shouldShowHamburger;
  const showSidebarToggle = shouldShowSidebarToggle;

  // Debug logging
  if (isDebugMode()) {
    console.log('Scaffold Debug:', {
      breakpoint,
      shouldShowHamburger,
      shouldShowSidebarToggle,
      debugShowToggle,
      showHamburger,
      showSidebarToggle,
      hasDrawer: !!drawer,
      hasDesktopSidebar: !!(drawer && breakpoint === 'desktop'),
      isSidebarCollapsed,
      collapsedSidebarWidth,
    });
  }

  const currentPath = location.pathname;
  const activeBottomNav = bottomNavigation?.find((item) => item.path === currentPath);

  return (
    <ScaffoldContainer theme={theme}>
      {/* App Bar */}
      {(title || showBackButton || appBarActions) && (
        <AppBar
          theme={theme}
          $elevated={true}
          $hasDesktopSidebar={!!(drawer && breakpoint === 'desktop')}
          $sidebarCollapsed={isSidebarCollapsed}
          $collapsedWidth={collapsedSidebarWidth}
        >
          {/* Debug Row - Only in Debug Mode */}
          {isDebugMode() && (
            <DebugRow theme={theme}>
              <span>🐛 DEBUG MODE</span>
              {isFeatureEnabled('ADMIN_OVERRIDE') && <span>• 🔑 ADMIN OVERRIDE ENABLED</span>}
              <span>• 📱 {breakpoint.toUpperCase()}</span>
              <span>
                • 🎛️ {showSidebarToggle ? 'SIDEBAR TOGGLE' : showHamburger ? 'HAMBURGER' : 'NO BTN'}
              </span>
              <span>
                • 🔍 H:{shouldShowHamburger ? 'Y' : 'N'} ST:{shouldShowSidebarToggle ? 'Y' : 'N'}
              </span>
            </DebugRow>
          )}

          {/* Main App Bar Content */}
          <AppBarContent>
            <AppBarLeft>
              {showHamburger && (
                <button
                  data-debug="hamburger"
                  onClick={handleSidebarToggle}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: theme.colors.text.primary,
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: '0.375rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.2s ease-in-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.gray[100];
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  title="Open menu"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </button>
              )}
              {showSidebarToggle && (
                <button
                  data-debug="sidebar-toggle"
                  onClick={handleSidebarToggle}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: theme.colors.text.primary,
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: '0.375rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.2s ease-in-out',
                    ...(debugShowToggle && {
                      backgroundColor: theme.colors.primary[100],
                      border: `2px solid ${theme.colors.primary[500]}`,
                    }),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = debugShowToggle
                      ? theme.colors.primary[200]
                      : theme.colors.gray[100];
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = debugShowToggle
                      ? theme.colors.primary[100]
                      : 'transparent';
                  }}
                  title={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </button>
              )}
              {showBackButton && (
                <BackButton onClick={handleBack} theme={theme} title="Go back">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </BackButton>
              )}
            </AppBarLeft>
            {title && <AppBarTitle theme={theme}>{title}</AppBarTitle>}
            <AppBarActions>
              {appBarActions}
              <ThemeToggle />
            </AppBarActions>
          </AppBarContent>
        </AppBar>
      )}

      {/* Desktop Sidebar */}
      {drawer && breakpoint === 'desktop' && (
        <DesktopSidebar
          theme={theme}
          $collapsed={isSidebarCollapsed}
          $collapsedWidth={collapsedSidebarWidth}
        >
          {isSidebarCollapsed ? (
            <>
              {drawer.header && (
                <CollapsedDrawerHeader theme={theme}>
                  {React.cloneElement(drawer.header as React.ReactElement, {
                    style: { fontSize: '1.5rem' },
                  })}
                </CollapsedDrawerHeader>
              )}
              <CollapsedDrawerContent theme={theme}>
                {drawer.items.map((item) => (
                  <CollapsedDrawerItem
                    key={item.key}
                    onClick={() => handleDrawerItemClick(item)}
                    theme={theme}
                    $active={item.active || currentPath === item.path}
                    title={item.label}
                  >
                    {item.icon}
                  </CollapsedDrawerItem>
                ))}
              </CollapsedDrawerContent>
              {drawer.footer && (
                <CollapsedDrawerFooter theme={theme}>
                  {React.cloneElement(drawer.footer as React.ReactElement, {
                    style: { padding: '0.5rem' },
                  })}
                </CollapsedDrawerFooter>
              )}
            </>
          ) : (
            <>
              {drawer.header && <DrawerHeader theme={theme}>{drawer.header}</DrawerHeader>}
              <DrawerContent theme={theme}>
                {drawer.items.map((item) => (
                  <DrawerItem
                    key={item.key}
                    onClick={() => handleDrawerItemClick(item)}
                    theme={theme}
                    $active={item.active || currentPath === item.path}
                  >
                    {item.icon}
                    {item.label}
                  </DrawerItem>
                ))}
              </DrawerContent>
              {drawer.footer && <DrawerFooter theme={theme}>{drawer.footer}</DrawerFooter>}
            </>
          )}
        </DesktopSidebar>
      )}

      {/* Mobile/Tablet Drawer */}
      {drawer && (breakpoint === 'mobile' || breakpoint === 'tablet') && (
        <>
          <Overlay $isOpen={isDrawerOpen} onClick={() => setIsDrawerOpen(false)} />
          <Drawer theme={theme} $isOpen={isDrawerOpen}>
            {drawer.header && <DrawerHeader theme={theme}>{drawer.header}</DrawerHeader>}
            <DrawerContent theme={theme}>
              {drawer.items.map((item) => (
                <DrawerItem
                  key={item.key}
                  onClick={() => handleDrawerItemClick(item)}
                  theme={theme}
                  $active={item.active || currentPath === item.path}
                >
                  {item.icon}
                  {item.label}
                </DrawerItem>
              ))}
            </DrawerContent>
            {drawer.footer && <DrawerFooter theme={theme}>{drawer.footer}</DrawerFooter>}
          </Drawer>
        </>
      )}

      {/* Body */}
      <Body
        $hasAppBar={!!(title || showBackButton || appBarActions)}
        $hasBottomNav={!!bottomNavigation}
        $hasDesktopSidebar={!!(drawer && breakpoint === 'desktop')}
        $sidebarCollapsed={isSidebarCollapsed}
        $collapsedWidth={collapsedSidebarWidth}
      >
        <Content $padding={bodyPadding}>{children}</Content>
      </Body>

      {/* Bottom Navigation */}
      {bottomNavigation && (
        <BottomNavigation
          theme={theme}
          $hasDesktopSidebar={!!(drawer && breakpoint === 'desktop')}
          $sidebarCollapsed={isSidebarCollapsed}
          $collapsedWidth={collapsedSidebarWidth}
        >
          {bottomNavigation.map((item) => (
            <BottomNavItem
              key={item.key}
              $active={item.path === currentPath}
              onClick={() => navigate(item.path)}
              theme={theme}
            >
              <BottomNavIcon>{item.icon}</BottomNavIcon>
              <BottomNavLabel theme={theme}>{item.label}</BottomNavLabel>
            </BottomNavItem>
          ))}
        </BottomNavigation>
      )}

      {/* Floating Action Button */}
      {floatingActionButton && (
        <FloatingActionButton
          $position={floatingActionButton.position}
          onClick={floatingActionButton.onClick}
          theme={theme}
        >
          {floatingActionButton.icon}
        </FloatingActionButton>
      )}
    </ScaffoldContainer>
  );
};
