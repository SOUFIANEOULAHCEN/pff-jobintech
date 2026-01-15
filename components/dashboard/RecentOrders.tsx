import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

function RecentOrders() {
  return (
    <Card className="w-full lg:w-1/2">
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
        <h2 className="text-lg font-semibold">Recent Orders</h2>
        <Link className="text-primary" href={"/orders"}>
          View All
        </Link>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of your recent orders.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-40">Product</TableHead>
              <TableHead className="min-w-28">Date</TableHead>
              <TableHead className="min-w-20">Price</TableHead>
              <TableHead className="min-w-24 text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2 min-w-40">
                  <img
                    src="https://prodimage.images-bn.com/pimages/9781787012493_p0_v1_s600x595.jpg"
                    alt="Planet Ebook"
                    className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl flex-shrink-0"
                  />
                  <span className="truncate">Planet Ebook</span>
                </div>
              </TableCell>
              <TableCell className="min-w-28">Oct 24, 2004</TableCell>
              <TableCell className="min-w-20">$20.00</TableCell>
              <TableCell className="text-right min-w-24">
                <Badge className="bg-green-300 text-green-700">Completed</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2 min-w-40">
                  <img
                    src="https://cdn.pacdora.com/render/1736753270845/11469796.jpg"
                    alt="3d t-shirt mockup"
                    className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl flex-shrink-0"
                  />
                  <span className="truncate">3d t-shirt mockup</span>
                </div>
              </TableCell>
              <TableCell className="min-w-28">Oct 29, 2004</TableCell>
              <TableCell className="min-w-20">$20.00</TableCell>
              <TableCell className="text-right min-w-24">
                <Badge className="bg-yellow-300 text-yellow-700">Pending</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default RecentOrders
