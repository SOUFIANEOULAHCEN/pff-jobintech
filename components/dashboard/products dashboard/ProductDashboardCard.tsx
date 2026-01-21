import { Star } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import ProductModal from '@/components/Modals/ProductModal'
import { DeleteAlert } from '@/components/DeleteAlert'
import { InitialDataProps } from '@/types'
import Image from 'next/image'

export default function ProductDashboardCard({ data }: { data?: InitialDataProps }) {
  return (
    <div className="w-full max-w-sm">
      <Card className="overflow-hidden py-0 border border-border hover:shadow-md transition-shadow duration-300">
        <div className="relative w-full h-56 bg-muted flex items-center justify-center overflow-hidden">
          {data?.coverImage ? (
            <img
              src={data.coverImage || "/placeholder.svg"}
              alt={data.title || 'Product'}
              
              className="object-cover"
            />
          ) : (
            <div className="text-muted-foreground text-sm">No image available</div>
          )}
        </div>
        <CardContent className="pt-4 space-y-3">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-card-foreground line-clamp-2">
              {data?.title || 'Product Title'}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-1">
              {data?.description || 'Product description'}
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="text-sm font-semibold text-foreground">4.7</span>
              </div>
              <span className="text-xs text-muted-foreground">(85)</span>
            </div>
            <span className="text-xl font-bold text-primary">
              ${data?.finalPrice || '0.00'}
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 p-4 pt-0">
          <ProductModal mode="edit" InitialData={data}/>
          <DeleteAlert />
        </CardFooter>
      </Card>
    </div>
  )
}
