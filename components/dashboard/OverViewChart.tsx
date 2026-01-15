import React from "react";
import { VendorChart } from "../VendorChart";
import { Card, CardContent, CardFooter } from "../ui/card";

function OverViewChart() {
  return (
    <div className="p-5 lg:block hidden">
      <VendorChart />
    </div>
  );
}

export default OverViewChart;
