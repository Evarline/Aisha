/* ═══════════════════════════════════════════════════
   DASHBOARD MOCK DATA — Production-grade fixtures
   Aisha AI Dashboard Metrics & Activity Feed
   ═══════════════════════════════════════════════════ */

export interface DashboardMetrics {
  totalConversations: number;
  pending: number;
  revenue: number;
  aiHandledRatio: number;
  avgResponseTime: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  status: "completed" | "pending" | "urgent";
  timestamp: string;
  icon?: string;
}

export const dashboardMetrics: DashboardMetrics = {
  totalConversations: 1250,
  pending: 12,
  revenue: 50000,
  aiHandledRatio: 78,
  avgResponseTime: "2.3m",
};

export const recentActivityFeed: ActivityItem[] = [
  {
    id: "1",
    title: "Order #4521 - Customer inquiry resolved",
    status: "completed",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    title: "Product support ticket awaiting response",
    status: "pending",
    timestamp: "45 minutes ago",
  },
  {
    id: "3",
    title: "High-priority customer complaint escalated",
    status: "urgent",
    timestamp: "15 minutes ago",
  },
];

export const kpiData = {
  revenue: {
    label: "Revenue",
    value: "KES 50,000",
    currency: true,
  },
  avgResponseTime: {
    label: "Avg Response Time",
    value: "2.3m",
    unit: "minutes",
  },
  aiRatio: {
    label: "AI Handled",
    value: "78%",
    percentage: true,
  },
};
