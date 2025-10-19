import React from 'react';
import { Button } from '../../components/Button';
import { DashboardLayout } from '../../components/DashboardLayout';
import { api } from '../../shared/api';
import { toast } from '../../shared/toast';
import { useTheme } from '../../theme/ThemeProvider';
import {
  ButtonGroup,
  DashboardContainer,
  DataSection,
  EmptyState,
  LoadingSpinner,
  SectionTitle,
  StatCard,
  StatsGrid,
  StatTitle,
  StatValue,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow,
  UrlCell,
} from './Dashboard.styles';

type Sample = {
  id?: string | number;
  url?: string;
  label?: string | number | boolean;
  score?: number;
};

export default function Dashboard() {
  const { theme } = useTheme();
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState<Sample[]>([]);

  const testPing = async () => {
    try {
      const { data } = await api.get('/ping');
      toast(`API OK: ${JSON.stringify(data)}`);
    } catch (e: any) {
      toast(e?.message ?? 'Ping failed');
    }
  };

  const loadSamples = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/phishing/samples');
      const arr = Array.isArray(data) ? data : data?.items || [];
      setItems(arr);
      toast(`Loaded ${arr.length} samples`);
    } catch (e: any) {
      toast(e?.message ?? 'Failed to load samples');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadSamples();
  }, []);

  return (
    <DashboardLayout title="Dashboard" data-route="dashboard" selectedItem="dashboard">
      <DashboardContainer>
        <StatsGrid theme={theme}>
          <StatCard theme={theme}>
            <StatTitle theme={theme}>Total Samples</StatTitle>
            <StatValue theme={theme}>{items.length}</StatValue>
          </StatCard>
          <StatCard theme={theme}>
            <StatTitle theme={theme}>Phishing Detected</StatTitle>
            <StatValue theme={theme}>
              {items.filter((item) => item.label === true || item.label === 1).length}
            </StatValue>
          </StatCard>
          <StatCard theme={theme}>
            <StatTitle theme={theme}>Legitimate</StatTitle>
            <StatValue theme={theme}>
              {items.filter((item) => item.label === false || item.label === 0).length}
            </StatValue>
          </StatCard>
          <StatCard theme={theme}>
            <StatTitle theme={theme}>Avg Score</StatTitle>
            <StatValue theme={theme}>
              {items.length > 0
                ? (items.reduce((sum, item) => sum + (item.score || 0), 0) / items.length).toFixed(
                    2,
                  )
                : '0.00'}
            </StatValue>
          </StatCard>
        </StatsGrid>

        <DataSection theme={theme}>
          <SectionTitle theme={theme}>Phishing Samples</SectionTitle>

          <ButtonGroup>
            <Button variant="outline" onClick={testPing}>
              Test API /ping
            </Button>
            <Button variant="primary" onClick={loadSamples} loading={loading}>
              {loading ? 'Loading…' : 'Reload Samples'}
            </Button>
          </ButtonGroup>

          {loading ? (
            <LoadingSpinner theme={theme} />
          ) : (
            <TableContainer theme={theme}>
              <Table theme={theme}>
                <TableHeader theme={theme}>
                  <tr>
                    <TableHeaderCell theme={theme}>ID</TableHeaderCell>
                    <TableHeaderCell theme={theme}>URL</TableHeaderCell>
                    <TableHeaderCell theme={theme}>Label</TableHeaderCell>
                    <TableHeaderCell theme={theme}>Score</TableHeaderCell>
                  </tr>
                </TableHeader>
                <TableBody theme={theme}>
                  {items.map((it, idx) => (
                    <TableRow key={(it.id as any) ?? idx} theme={theme}>
                      <TableCell theme={theme}>{String(it.id ?? idx)}</TableCell>
                      <UrlCell theme={theme}>{it.url || '-'}</UrlCell>
                      <TableCell theme={theme}>{String(it.label ?? '-')}</TableCell>
                      <TableCell theme={theme}>
                        {typeof it.score === 'number' ? it.score.toFixed(3) : '-'}
                      </TableCell>
                    </TableRow>
                  ))}
                  {!items.length && !loading && (
                    <TableRow theme={theme}>
                      <TableCell colSpan={4} theme={theme}>
                        <EmptyState theme={theme}>
                          No data yet. Wire /phishing/samples on your API.
                        </EmptyState>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataSection>
      </DashboardContainer>
    </DashboardLayout>
  );
}
