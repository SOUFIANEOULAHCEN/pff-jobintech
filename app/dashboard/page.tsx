import DashboardCard from "@/components/dashboard/DashboardCard";
import { ThemeButton } from "@/components/ThemeButton";
import { Button } from "@/components/ui/button";
import { Bell, Plus } from "lucide-react";
import { MdOutlinePayments } from 'react-icons/md'
import { IoBagOutline, IoStar } from "react-icons/io5";
import { BsCloudDownload } from "react-icons/bs";
import OverViewChart from "@/components/dashboard/OverViewChart";
import RecentOrders from "@/components/dashboard/RecentOrders";
import LiveActivities from "@/components/dashboard/LiveActivities";
import ProductModal from "@/components/Modals/ProductModal";

const CardsData = [
  {title: "Total Revenue", value: "$15,194", vsLastMonth: "+15% vs last month", icon: MdOutlinePayments, iconColor: "text-purple-500", iconBgColor: "bg-purple-400/20"},
  {title: "Total Sales", value: "1,234", vsLastMonth: "+8% vs last month", icon: IoBagOutline, iconColor: "text-blue-500", iconBgColor: "bg-blue-400/20"},
  {title: "Active Downloads", value: "5,678", icon: BsCloudDownload, iconColor: "text-green-500", iconBgColor: "bg-green-400/20"},
  {title: "Average Rating", value: `4.8`, icon: IoStar, iconColor: "text-yellow-500", iconBgColor: "bg-yellow-400/20"},
]




function page() {

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col p-5 gap-2">
      <div className="w-full h-20 flex items-center justify-between px-4">
        <h1 className="text-xl lg:text-4xl font-bold flex gap-2"><span className="hidden lg:block">Dashboard</span> Overview</h1>
        <div className="flex w-[30%] h-full items-center justify-end gap-3">
          <Button className="w-12 h-12 shadow" variant={"secondary"}>
            <Bell size={25} />
          </Button>
          <ThemeButton />
          <ProductModal />
        </div>
      </div>
      <div className="w-full lg:p-5 py-2 flex flex-col justify-center lg:flex-row items-center gap-4">
        {CardsData.map((item, idx) => (
          <DashboardCard
            key={idx}
            icon={item.icon}
            iconBgColor={item.iconBgColor}
            iconColor={item.iconColor}
            title={item.title}
            value={item.value}
            vsMonth={item.vsLastMonth}
          />
        ))}
      </div>
      <OverViewChart />
      <div className="w-full flex flex-col lg:flex-row gap-5 lg:px-5">
          <RecentOrders />
          <LiveActivities />
      </div>
    </div>
  );
}

export default page;
