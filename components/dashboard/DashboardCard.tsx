import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Badge } from '../ui/badge'
import { IconType } from 'react-icons'

type DashboardCardProps = {
  icon: IconType
  iconBgColor: string
  iconColor?: string
  title: string
  value: string
  vsMonth?: string
}

function DashboardCard({
  icon: Icon,
  iconBgColor,
  iconColor = 'text-white',
  title,
  value,
  vsMonth,
}: DashboardCardProps) {
  return (
    <Card className="w-full h-full">
      <CardHeader className="flex justify-between">
        <div
          className={`w-17 h-17 rounded-full flex items-center justify-center ${iconBgColor}`}
        >
          <Icon size={30} className={iconColor} />
        </div>

        {vsMonth && (
          <Badge className="bg-green-100 text-green-900">
            {vsMonth}
          </Badge>
        )}
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        <h1 className="text-xl text-muted-foreground">{title}</h1>
        <h1 className="text-[45px] font-bold">{value}</h1>
      </CardContent>
    </Card>
  )
}

export default DashboardCard
