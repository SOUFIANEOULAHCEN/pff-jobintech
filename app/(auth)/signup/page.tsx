import SignupForm from "@/components/Auth/SignupForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

function page() {
  return (
    <div className="w-full h-full p-10 flex items-center justify-center font-cal-sans">
      <div className="w-full h-full flex flex-col justify-start gap-4">
        <SignupForm />
      </div>
    </div>
  );
}

export default page;
