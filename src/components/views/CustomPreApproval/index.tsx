import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { calcLaonSuccessProbability } from '@/redux/features/wallet.slice/asyncThunks';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import React, { useState } from 'react'

export default function CustomPreApproval (){

  const dispatch = useAppDispatch();
  const {userinfo ,address ,probability} = useAppSelector(s => s.wallet);
  const [CustomPreApprovalvalue ,setCustomPreApprovalvalue] = useState<boolean>(false)
  const handleGetcustompreapprovals = () => {
    setCustomPreApprovalvalue(!CustomPreApprovalvalue)
    console.log("===three values ====")
    console.log(loanAmmount,durationindays,aPRvalue)

    address && dispatch(calcLaonSuccessProbability({
      appliedInterestRate: aPRvalue, loanRequired_eth: loanAmmount, repaymentDays: durationindays,
      walletAddress: address
    }))

    console.log("===Values of probability ====")
    console.log(probability)

  }

  const [loanAmmount, setLoanAmmount] = useState<number>(0);
  const [durationindays, setDurationindays] = useState<number>(0);
  const [aPRvalue, setAPRvalue] = useState<number>(0);
  
  
  return (
    <>
 <div className="flex flex-col p-5 ">
    <p className=" text-lg font-semibold">Custom Pre Approval </p>
{CustomPreApprovalvalue? 
  <div className="flex  flex-col mt-6">
  <p className="flex justify-center pr-2 text-2xl">your loan return probability is {probability}%</p>
  <Button onClick={()=>{handleGetcustompreapprovals()}} className="bg-blue-500  mt-2  px-3 py-2">Try Again </Button>
  </div>
:<form>
<div className="flex mt-2 space-x-2">
    <Input 
    onChange={(e)=> setLoanAmmount(e.currentTarget.valueAsNumber)} 
    type="number" 
    className="px-3 py-2 w-80" 
    placeholder="Loan Ammount" />
   
  </div>
   <div className="flex  mt-2   space-x-2">
   <Input 
    onChange={(e)=> setDurationindays(e.currentTarget.valueAsNumber)} 
   type="number" 
   className="px-3 py-2 w-80" 
   placeholder="Duration in days" />
   
 </div>
  <div className="flex  mt-2   space-x-2">
  <Input 
  onChange={(e)=> setAPRvalue(e.currentTarget.valueAsNumber)} 
  type="number" 
  className="px-3 py-2 w-80" 
  placeholder="APR value" />
 
</div>
<Button onClick={()=>{handleGetcustompreapprovals()}} className="bg-blue-500  mt-2  px-3 py-2">Submit</Button>
</form>}
</div>
  </>
  )
}
