import styled from 'styled-components';

export const AnalyticsContainer = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AnalyticsCard = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 1rem;
  box-shadow: ${(props) => props.theme.shadows.md};
  padding: 2rem;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

export const AnalyticsTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0 0 1rem 0;
`;

export const AnalyticsDescription = styled.p`
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.text.secondary};
  margin: 0 0 2rem 0;
  line-height: 1.6;
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const MetricCard = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.lg};
    border-color: ${(props) => props.theme.colors.primary[300]};
  }
`;

export const MetricTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text.secondary};
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const MetricValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0 0 0.5rem 0;
`;

export const MetricChange = styled.div<{ $positive: boolean }>`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => (props.$positive ? '#10b981' : '#ef4444')};
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &::before {
    content: ${(props) => (props.$positive ? '"↗"' : '"↘"')};
    font-size: 0.75rem;
  }
`;

export const ChartSection = styled.div`
  margin-bottom: 3rem;
`;

export const ChartTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0 0 1.5rem 0;
`;

export const ChartPlaceholder = styled.div`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.background} 0%,
    ${(props) => props.theme.colors.gray[50]} 100%
  );
  border: 2px dashed ${(props) => props.theme.colors.border};
  border-radius: 0.75rem;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary[300]};
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.primary[50]} 0%,
      ${(props) => props.theme.colors.primary[100]} 100%
    );
  }
`;

export const TableSection = styled.div`
  margin-bottom: 2rem;
`;

export const TableTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0 0 1.5rem 0;
`;

export const TablePlaceholder = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
`;

export const TableHeader = styled.div`
  background-color: ${(props) => props.theme.colors.gray[50]};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[100]};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.gray[50]};
  }
`;

export const TableCell = styled.div<{ $isHeader?: boolean }>`
  font-size: 0.875rem;
  font-weight: ${(props) => (props.$isHeader ? '600' : '500')};
  color: ${(props) =>
    props.$isHeader ? props.theme.colors.text.primary : props.theme.colors.text.secondary};
  display: flex;
  align-items: center;
`;
