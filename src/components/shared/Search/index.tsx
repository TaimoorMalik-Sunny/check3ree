import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export const Searchbar = () => {
  return (
  <div className="flex flex-col p-5 ">
    <p className=" text-lg font-semibold">Custome Pre Approval </p>
  <div className="flex mt-2 space-x-2">
    <Input type="text" className="px-3 py-2 w-80" placeholder="Search your wallet here " />
   
  </div>
   <div className="flex  mt-2   space-x-2">
   <Input type="text" className="px-3 py-2 w-80" placeholder="Search your wallet here " />
   
 </div>
  <div className="flex  mt-2   space-x-2">
  <Input type="text" className="px-3 py-2 w-80" placeholder="Search your wallet here " />
 
</div>
<Button className="bg-blue-500  mt-2  px-3 py-2">Sumite</Button>
</div>
  )
}
