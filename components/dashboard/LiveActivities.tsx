import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Star } from 'lucide-react'

function LiveActivities() {
  return (
    <Card className='w-full lg:w-1/2'>
        <CardHeader>
            <h3 className='text-xl font-semibold'>Live Activities</h3>
        </CardHeader>
        <CardContent>
            <div className='w-full p-4 flex h-34 gap-5 lg:gap-0'>
                <div className='w-[11%] flex flex-col items-center gap-1'>
                    <div className='w-15 h-15 bg-green-200 text-green-700 flex items-center justify-center rounded-full'>
                        <Star />
                    </div>
                    <div className='w-0 h-10 border'>
                    </div>
                </div>
                <div className="w-full flex flex-col p-2">
                    <h1 className="text-lg font-bold">New 5-stars review from Alex</h1>
                    <p className='text-muted-foreground'>2m ago</p>
                </div>
            </div>
            <div className='w-full p-4 flex h-34'>
                <div className='w-[11%] flex flex-col items-center gap-1'>
                    <div className='w-15 h-15 bg-green-200 text-green-700 flex items-center justify-center rounded-full'>
                        <Star />
                    </div>
                    <div className='w-0 h-10 border'>
                    </div>
                </div>
                <div className="w-full flex flex-col p-2">
                    <h1 className="text-lg font-bold">New 5-stars review from Alex</h1>
                    <p className='text-muted-foreground'>2m ago</p>
                </div>
            </div>
        </CardContent>
    </Card>
  )
}

export default LiveActivities