
import { useAppDispatch, useAppSelector } from '@/redux/store'
import axios from 'axios';
import React from 'react'

const CheckYourVERAFIReport = () => {
  const dispatch = useAppDispatch();
  const { address, balance, ageInDays } = useAppSelector(s => s.wallet);
  
  const handlePDFwalletReport = () => {
       
      console.log("call PDF")
      const walletAddress = address
      downloadPDF({walletAddress});
      
  
    
    }

  // ================  CODE for DOWNLOAD PDF ================


 const downloadPDF = async ({walletAddress}:{walletAddress:string|undefined|null}) => {
    const apiEndpoint = `https://yekzta3qa8.execute-api.us-east-1.amazonaws.com/prod/generate-pdf?wallet_address=${walletAddress}`
    try {
        const resp = await axios.get(apiEndpoint, { responseType: 'blob' });
        console.log("res.data ===>", resp.data);
        const url = window.URL.createObjectURL(new Blob([resp.data], { type: "application/pdf" }));
        const link = document.createElement('a');
        link.href = url;
        link.target = "_blank"
        //link.setAttribute('download', `Transactions-Report.pdf`);
        document.body.appendChild(link);
        link.click();

    } catch (error) {
        console.log((error as any).response);
        return { error } as any
    }
}
 
  
  return (
    <div  >
      <div className=" flex flex-col items-center justify-center    md:mt-10 ">
        <div>
          <h1 className=" pr-2 text-base lg:text-xl">Check Your VERAFI Report</h1>
        </div>
        <span className="mt-4">
          <div className=" lg:flex items-center">
            <div className=" w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 hover:p-1">
              <button onClick={()=>{handlePDFwalletReport()}} className="bg-black text-yellow-50 rounded-full  px-8 py-2  ">Download Report</button>
            </div>
          </div>
        </span>


      </div>
    </div>
  )
}
export default CheckYourVERAFIReport