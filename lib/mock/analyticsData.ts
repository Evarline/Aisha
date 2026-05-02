/* ═══════════════════════════════════════════════════
   ANALYTICS MOCK DATA — Production-grade fixtures
   Aisha AI Analytics Metrics & Product Performance
   ═══════════════════════════════════════════════════ */

export interface ProductQuery {
  id: string;
  productName: string;
  queries: number;
  conversionRate: number;
}

export interface ConversationData {
  day: string;
  count: number;
}

export interface CSATMetric {
  score: number;
  total: number;
}

export const productQueryData: ProductQuery[] = [
  {
    id: "1",
    productName: "Premium Plan",
    queries: 348,
    conversionRate: 72,
  },
  {
    id: "2",
    productName: "Standard Package",
    queries: 521,
    conversionRate: 65,
  },
  {
    id: "3",
    productName: "Starter Bundle",
    queries: 289,
    conversionRate: 58,
  },
];

export const conversationOverTimeData: ConversationData[] = [
  { day: "Mon", count: 245 },
  { day: "Tue", count: 312 },
  { day: "Wed", count: 288 },
  { day: "Thu", count: 401 },
  { day: "Fri", count: 367 },
  { day: "Sat", count: 189 },
  { day: "Sun", count: 156 },
];

export const csatMetric: CSATMetric = {
  score: 4.9,
  total: 5,
};

export const topProductsList = [
  "Premium Plan",
  "Standard Package",
  "Starter Bundle",
];

export const aiResolutionRate = 88;

export const analyticsMetrics = {
  totalQueries: 1158,
  avgConversionRate: 65,
  topProduct: "Standard Package",
  weeklyGrowth: "+12%",
};
