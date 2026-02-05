"use client"

import { ConversionFunnel } from "./ConversionFunnel";
import { DeviceBreakdown } from "./DeviceBreakdown";
import { GeographicDistribution } from "./GeographicDistribution";
import { KPISummary } from "./KPISummary";
import { TopProducts } from "./TopProducts";
import { TrafficSources } from "./TrafficSources";
import { TrendCharts } from "./TrendCharts";
import { WeeklyPerformance } from "./WeeklyPerformance";



export const AnalyticsPage = () => {
  return (
    <>
      {/* KPI Summary Row */}
      <KPISummary />

      {/* Main Charts */}
      <TrendCharts />

      {/* Weekly Performance & Top Products */}
      <div className="grid gap-6 lg:grid-cols-2 mb-6">
        <WeeklyPerformance />
        <TopProducts />
      </div>

      {/* Traffic & Device Analytics */}
      <div className="grid gap-6 lg:grid-cols-3 mb-6">
        <TrafficSources />
        <DeviceBreakdown />
        <GeographicDistribution />
      </div>

      {/* Conversion Funnel */}
      <ConversionFunnel />
    </>
  );
};
