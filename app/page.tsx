'use client'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Temp from "@/components/interface/temp"
import {TableDemo} from "@/components/interface/temptable";
import {Separator} from "@/components/ui/separator";
export default function Home() {
  return (
      <div className={"grid grid-cols-12 gap-2"}>
            <Card className={"col-span-5"}>

            </Card>

              <Card className={"col-span-7"}>
                  <CardHeader>
                      <CardTitle>Temperature</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <TableDemo/>
                      <Separator className={"my-5"}/>
                      <Temp/>
                  </CardContent>
              </Card>
      </div>
  )
}