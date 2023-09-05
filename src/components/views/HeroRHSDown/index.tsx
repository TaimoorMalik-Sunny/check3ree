import React from 'react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import CardGridCell3 from '@/components/shared/CardGridCell3'
import aavelogo from '../../../../public/aavelogo.png'
import bendao from '../../../../public/benddao.jpeg'
import blend from '../../../../public/blend.webp'
import nftfi from '../../../../public/nftfi.png'

export const HeroRHSDown = () => {
  return (
    
    <Tabs defaultValue="crypto coins" className=" w-full ">
    <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="NFTs">NFTs</TabsTrigger>
      <TabsTrigger value="crypto coins">Crypto Coins</TabsTrigger>
      {/* <TabsTrigger value="LiquidityPools">Liquidity Pools</TabsTrigger> */}
    
    </TabsList>
    <TabsContent value="crypto coins">
      <Card>
        {/* <CardHeader className="flex flex-row justify-between">
          <CardTitle>Crypto Coins</CardTitle>
          <CardDescription>
            Total: $155.98
          </CardDescription>
         
        </CardHeader> */}
        <CardContent className="space-y-2">
          <div className="space-y-1">
          <CardGridCell3  image={aavelogo}  title={"Aave"} value={"$300"}/>
          </div>
          <div className="space-y-1">
          <CardGridCell3  image={bendao}  title={"bendao"} value={"$200"}/>
          </div>
        </CardContent>
       
      </Card>
    </TabsContent>
    {/* <TabsContent value="LiquidityPools">
      <Card>
        <CardHeader>
          <CardTitle>Liquidity Pools</CardTitle>
          <CardDescription>
            Change your password here. After saving, you'll be logged out.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="current">Current password</Label>
            <Input id="current" type="password" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="new">New password</Label>
            <Input id="new" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save password</Button>
        </CardFooter>
      </Card>
    </TabsContent> */}
    <TabsContent value="NFTs">
      <Card>
        {/* <CardHeader className="flex flex-row justify-between">
            
          <CardTitle>NFTs Collection</CardTitle>
          <CardDescription>
            Total: 1NFT
          </CardDescription>
         
        </CardHeader> */}
        <CardContent className="space-y-2">
          <div className="space-y-1">
          <CardGridCell3 image={blend}  title={"blend"} value={"$100"}/>
          </div>
          <div className="space-y-1">
          <CardGridCell3 image={nftfi}  title={"NFTFI"} value={"$300"}/>
          </div>
        </CardContent>
      
      </Card>
    </TabsContent>
  </Tabs>
  )
}
