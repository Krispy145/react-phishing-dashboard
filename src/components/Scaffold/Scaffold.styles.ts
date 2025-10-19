import styled from 'styled-components';

export const ScaffoldContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

export const AppBar = styled.header<{
  $elevated?: boolean;
  $hasDesktopSidebar?: boolean;
  $sidebarCollapsed?: boolean;
  $collapsedWidth?: string;
}>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.surface};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => (props.$elevated ? props.theme.shadows.md : 'none')};
  z-index: 30;
  margin-left: ${(props) => {
    if (!props.$hasDesktopSidebar) return '0';
    return props.$sidebarCollapsed ? props.$collapsedWidth || '4rem' : '16rem';
  }};
  transition: margin-left 0.3s ease-in-out;
`;

export const AppBarContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr; /* Left, Center, Right */
  align-items: center;
  padding: 1rem 1.5rem;
`;

export const DebugRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  background-color: ${(props) => props.theme.colors.gray[50]};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const AppBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-self: start; /* Align to left */
`;

export const AppBarTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0;
  justify-self: center; /* Center the title */
`;

export const AppBarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-self: end; /* Align to right */
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.text.primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray[100]};
    border-color: ${(props) => props.theme.colors.gray[300]};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary[500]};
    outline-offset: 2px;
  }
`;

export const Body = styled.main<{
  $hasAppBar?: boolean;
  $hasBottomNav?: boolean;
  $hasDesktopSidebar?: boolean;
  $sidebarCollapsed?: boolean;
  $collapsedWidth?: string;
}>`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-top: ${(props) => (props.$hasAppBar ? '0' : '0')};
  padding-bottom: ${(props) => (props.$hasBottomNav ? '0' : '0')};
  margin-left: ${(props) => {
    if (!props.$hasDesktopSidebar) return '0';
    return props.$sidebarCollapsed ? props.$collapsedWidth || '4rem' : '16rem';
  }};
  transition: margin-left 0.3s ease-in-out;
`;

export const Content = styled.div<{ $padding?: boolean }>`
  flex: 1;
  padding: ${(props) => (props.$padding ? '1.5rem' : '0')};
  overflow-y: auto;
`;

export const BottomNavigation = styled.nav<{
  $hasDesktopSidebar?: boolean;
  $sidebarCollapsed?: boolean;
  $collapsedWidth?: string;
}>`
  display: flex;
  background-color: ${(props) => props.theme.colors.surface};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => props.theme.shadows.sm};
  z-index: 30;
  margin-left: ${(props) => {
    if (!props.$hasDesktopSidebar) return '0';
    return props.$sidebarCollapsed ? props.$collapsedWidth || '4rem' : '16rem';
  }};
  transition: margin-left 0.3s ease-in-out;
`;

export const BottomNavItem = styled.button<{ $active?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0.5rem;
  background-color: transparent;
  border: none;
  color: ${(props) =>
    props.$active ? props.theme.colors.primary[600] : props.theme.colors.text.secondary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 0.75rem;
  font-weight: 500;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray[50]};
    color: ${(props) => props.theme.colors.primary[600]};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary[500]};
    outline-offset: -2px;
  }
`;

export const BottomNavIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BottomNavLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
`;

export const FloatingActionButton = styled.button<{
  $position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}>`
  position: fixed;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.colors.primary[600]};
  color: white;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadows.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  z-index: 20;

  ${(props) => {
    switch (props.$position) {
      case 'bottom-left':
        return 'bottom: 1rem; left: 1rem;';
      case 'top-right':
        return 'top: 1rem; right: 1rem;';
      case 'top-left':
        return 'top: 1rem; left: 1rem;';
      default: // bottom-right
        return 'bottom: 1rem; right: 1rem;';
    }
  }}

  &:hover {
    background-color: ${(props) => props.theme.colors.primary[700]};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary[500]};
    outline-offset: 2px;
  }
`;

export const Drawer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 16rem;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.surface};
  border-right: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => props.theme.shadows.lg};
  transform: translateX(${(props) => (props.$isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 30;
  display: flex;
  flex-direction: column;
`;

export const DesktopSidebar = styled.aside<{ $collapsed: boolean; $collapsedWidth?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => (props.$collapsed ? props.$collapsedWidth || '4rem' : '16rem')};
  height: 100vh;
  background-color: ${(props) => props.theme.colors.surface};
  border-right: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => props.theme.shadows.sm};
  transition: width 0.3s ease-in-out;
  z-index: 20;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const DrawerHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const DrawerContent = styled.div`
  flex: 1;
  padding: 1rem 0;
  overflow-y: auto;
`;

export const DrawerFooter = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;

export const DrawerItem = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  border: none;
  color: ${(props) =>
    props.$active ? props.theme.colors.primary[600] : props.theme.colors.text.secondary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 0.875rem;
  font-weight: 500;
  width: 100%;
  text-align: left;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray[50]};
    color: ${(props) => props.theme.colors.primary[600]};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary[500]};
    outline-offset: -2px;
  }
`;

export const CollapsedDrawerItem = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  background-color: transparent;
  border: none;
  color: ${(props) =>
    props.$active ? props.theme.colors.primary[600] : props.theme.colors.text.secondary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 100%;
  border-radius: 0.375rem;
  margin: 0.25rem 0;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray[50]};
    color: ${(props) => props.theme.colors.primary[600]};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary[500]};
    outline-offset: -2px;
  }
`;

export const CollapsedDrawerHeader = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CollapsedDrawerContent = styled.div`
  flex: 1;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const CollapsedDrawerFooter = styled.div`
  padding: 1rem 0;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease-in-out;
  z-index: 25;
`;
