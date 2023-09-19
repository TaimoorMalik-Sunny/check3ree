'use client';
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardContent,

} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import CryptoProfileInfo from '@/components/shared/CryptoProfileInfo'
import aavelogo from '../../../../public/aavelogo.png'
import bendao from '../../../../public/benddao.jpeg'
import blend from '../../../../public/blend.webp'
import nftfi from '../../../../public/nftfi.png'
import { alchemy } from '@/lib/alchemy';
import { OwnedNft, OwnedToken } from 'alchemy-sdk';
import { useAppSelector } from '@/redux/store';


const defaultTokenImg = "https://icon-library.com/images/free-coin-icon/free-coin-icon-15.jpg"

export const NFTsCryptoCoins = () => {
  const [nfts, setNfts] = useState<OwnedNft[]>();
  const [tokens, setTokens] = useState<OwnedToken[]>();
  const walletAddress = useAppSelector(s => s.wallet.address);

  const loadData = async (walletAddress: string) => {
    // API for NFTs
    // const data1 = await alchemy.nft.getNftsForOwner('0xD5aE740ED785Cf3Fa54A176eE855A721591343D4');
    // console.log("alchemy.nft.getNftsForOwne", data1.ownedNfts)

    // // API for tokens
    // const data2 = await alchemy.core.getTokensForOwner("0xD5aE740ED785Cf3Fa54A176eE855A721591343D4");
    // console.log("alchemy.core.getTokensForOwner", data2.tokens)

    const [{ ownedNfts }, { tokens }] = await Promise.all([
      alchemy.nft.getNftsForOwner(walletAddress),
      alchemy.core.getTokensForOwner(walletAddress)
    ]);

    setNfts(ownedNfts);
    setTokens(tokens);

  }

  useEffect(() => {
    walletAddress && loadData("0xD5aE740ED785Cf3Fa54A176eE855A721591343D4");
  }, [walletAddress])


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
            {/* <div className="space-y-1">
              <CryptoProfileInfo image={aavelogo} title={"Aave"} value={"$300"} />
            </div> */}

            {
              tokens?.map((token, idx) => {
                return <div key={idx} className="space-y-1">
                  <CryptoProfileInfo image={token.logo || defaultTokenImg} title={token.name || token.symbol || ""} value={token.balance || '0'} />
                </div>
              })
            }
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
              <CryptoProfileInfo image={blend} title={"blend"} value={"$100"} />
            </div>
            <div className="space-y-1">
              <CryptoProfileInfo image={nftfi} title={"NFTFI"} value={"$300"} />
            </div>
          </CardContent>

        </Card>
      </TabsContent>
    </Tabs>
  )
}
