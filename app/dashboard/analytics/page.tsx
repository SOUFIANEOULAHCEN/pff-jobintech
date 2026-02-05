import { AnalyticsPage } from '@/components/dashboard/analytics dashboard/AnalyticsPage'
import React from 'react'

function page() {
  return (
    <div className="w-full flex flex-col p-5">
      <div className="w-full flex items-center p-5">
        <div className="w-full flex items-start lg:justify-start flex-col gap-1">
          <h1 className="text-2xl lg:text-4xl font-bold">My Products</h1>
          <p className="text-sm text-muted-foreground">
            Manage and organize all your products in one place.{" "}
            <span className="hidden lg:inline">
              View, edit, or add new items to your inventory.
            </span>
          </p>
        </div>
      </div>
      <AnalyticsPage />
    </div>
  )
}

export default page