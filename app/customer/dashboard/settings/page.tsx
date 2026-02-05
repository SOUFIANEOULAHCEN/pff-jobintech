import { DangerZone } from "@/components/dashboard/settings/DangerZone";
import { PaymentSettings } from "@/components/dashboard/settings/PaymentSettings";
import { ProfileSettings } from "@/components/dashboard/settings/ProfileSettings";
import { StoreSettings } from "@/components/dashboard/settings/StoreSettings";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <div className="w-full flex items-center py-5">
        <div className="w-full flex items-start lg:justify-start flex-col gap-1">
          <h1 className="text-2xl lg:text-4xl font-bold">Settings</h1>
          <p className="text-sm text-muted-foreground">
            Manage and Change your settings.{" "}
          </p>
        </div>
      </div>
      <div className=" space-y-8">
        <ProfileSettings />
        <StoreSettings />
        <PaymentSettings />
        <DangerZone />

        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </div>
    </>
  );
};

export default page;
