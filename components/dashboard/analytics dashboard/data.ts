// Revenue & Downloads data over 6 months
export const revenueData = [
  { month: "Jan", revenue: 4200, downloads: 320, visitors: 2400 },
  { month: "Feb", revenue: 5100, downloads: 410, visitors: 2900 },
  { month: "Mar", revenue: 4800, downloads: 380, visitors: 2700 },
  { month: "Apr", revenue: 6200, downloads: 520, visitors: 3400 },
  { month: "May", revenue: 5800, downloads: 480, visitors: 3100 },
  { month: "Jun", revenue: 7100, downloads: 610, visitors: 3800 },
];

// Weekly performance data
export const weeklyData = [
  { day: "Mon", sales: 12, revenue: 468 },
  { day: "Tue", sales: 18, revenue: 702 },
  { day: "Wed", sales: 15, revenue: 585 },
  { day: "Thu", sales: 22, revenue: 858 },
  { day: "Fri", sales: 28, revenue: 1092 },
  { day: "Sat", sales: 35, revenue: 1365 },
  { day: "Sun", sales: 24, revenue: 936 },
];

// Top performing products
export const topProducts = [
  { name: "Icon Collection Pro", sales: 312, revenue: 12168, growth: 23, rating: 4.9 },
  { name: "Ultimate UI Kit", sales: 234, revenue: 11466, growth: 18, rating: 4.8 },
  { name: "React Component Library", sales: 156, revenue: 12324, growth: 31, rating: 4.7 },
  { name: "Notion Templates Pack", sales: 89, revenue: 2581, growth: -5, rating: 4.5 },
  { name: "E-commerce Starter Kit", sales: 67, revenue: 8643, growth: 12, rating: 4.6 },
];

// Traffic sources
export const trafficSources = [
  { source: "Direct", visitors: 4200, fill: "hsl(var(--chart-1))" },
  { source: "Organic Search", visitors: 3100, fill: "hsl(var(--chart-2))" },
  { source: "Social Media", visitors: 2400, fill: "hsl(var(--chart-3))" },
  { source: "Referral", visitors: 1800, fill: "hsl(var(--chart-4))" },
  { source: "Email", visitors: 900, fill: "hsl(var(--chart-5))" },
];

// Device breakdown
export const deviceData = [
  { device: "Desktop", percentage: 58, fill: "hsl(var(--chart-1))" },
  { device: "Mobile", percentage: 32, fill: "hsl(var(--chart-2))" },
  { device: "Tablet", percentage: 10, fill: "hsl(var(--chart-3))" },
];

// Geographic data
export const geoData = [
  { country: "United States", sales: 423, percentage: 42 },
  { country: "United Kingdom", sales: 187, percentage: 19 },
  { country: "Germany", sales: 134, percentage: 13 },
  { country: "Canada", sales: 98, percentage: 10 },
  { country: "Australia", sales: 76, percentage: 8 },
  { country: "Other", sales: 82, percentage: 8 },
];

// Conversion funnel
export const funnelData = [
  { stage: "Page Views", value: 12847, rate: 100 },
  { stage: "Product Views", value: 8234, rate: 64 },
  { stage: "Add to Cart", value: 1648, rate: 20 },
  { stage: "Checkout", value: 987, rate: 60 },
  { stage: "Purchase", value: 858, rate: 87 },
];

// Chart configs
export const revenueChartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--chart-1))" },
  downloads: { label: "Downloads", color: "hsl(var(--chart-2))" },
  visitors: { label: "Visitors", color: "hsl(var(--chart-3))" },
};

export const weeklyChartConfig = {
  sales: { label: "Sales", color: "hsl(var(--chart-1))" },
  revenue: { label: "Revenue", color: "hsl(var(--chart-2))" },
};

export const trafficChartConfig = {
  visitors: { label: "Visitors" },
  Direct: { label: "Direct", color: "hsl(var(--chart-1))" },
  "Organic Search": { label: "Organic Search", color: "hsl(var(--chart-2))" },
  "Social Media": { label: "Social Media", color: "hsl(var(--chart-3))" },
  Referral: { label: "Referral", color: "hsl(var(--chart-4))" },
  Email: { label: "Email", color: "hsl(var(--chart-5))" },
};

export const deviceChartConfig = {
  percentage: { label: "Usage" },
  Desktop: { label: "Desktop", color: "hsl(var(--chart-1))" },
  Mobile: { label: "Mobile", color: "hsl(var(--chart-2))" },
  Tablet: { label: "Tablet", color: "hsl(var(--chart-3))" },
};
