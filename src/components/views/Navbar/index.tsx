"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsCart2} from 'react-icons/bs'
import {HiOutlineChevronDown} from 'react-icons/hi'
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoMdClose} from 'react-icons/io'


import Dropdown from './Subcomponents/Dropdown'
import Expand from './Subcomponents/Expand'
import { NavbarArray, NavbarItemtypes } from '@/components/utils/NavbarArrayAndTypes'

import { getWalletAttributes, setMyValue } from '@/redux/features/wallet.slice';
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { Button } from '@/components/ui/button'
import { calcCreditScore, calcPreApproval } from '@/redux/features/wallet.slice/asyncThunks'
 
 
 
 const index = () => {
  const ethereum = (window as any).ethereum;
    const [isNavbarOpen , setNavbarOpen] = useState<boolean>(false);
  const [cartItemNumber , setcartItemNumber] = useState<number>(2);  
  const dispatch = useAppDispatch();
   const {userinfo ,address ,attribute,score} = useAppSelector(s => s.wallet);
   
    console.log(attribute)
    
    const [connectionStatus, setConnectionStatus] = useState("");
    const [etherValuestate, setEtherValuestate] = useState("");
    
    const handleConnectwallet = () => {
      
      
    connectToWallet()
      
      console.log("call")
      
  
    
    }
    console.log(attribute?.["wallet_age_days_att_7"])
    // wallet connectivity ftn
    const connectToWallet = async () => {
      if (ethereum) {
        try {
          // Requesting access to MetaMask wallet
         const etherValue= await ethereum.request({ method: "eth_requestAccounts" }).
         then((addr: string[])=>{
          // setEtherValuestate(addr)
          //  address && 
          console.log(addr[0])
          dispatch(setMyValue(addr[0])); ;

          
          dispatch(getWalletAttributes( { walletAddress:addr[0]}));
          
          //  address && 
          dispatch(calcCreditScore({ walletAddress:addr[0]}))
          
          //  address && 
          dispatch(calcPreApproval({ walletAddress:addr[0]}))
         
        
         }
         );
       
        
          setConnectionStatus("Successfully Connected");
          // state.address = etherValue
          console.log(connectionStatus)
        } catch (error) {
          setConnectionStatus("Connection Failed");
          console.error("MetaMask connection error:", error);
        }
      } else {
        setConnectionStatus("MetaMask Not Detected");
      }
     
    };
  
    
  return (

        
          <div className="   border-b-2 border-white flex justify-between items-center m-2 px-2 py-0  ">
              <div className=" flex items-center">
               <Image width={100} height={40} src={"/logo.png"} alt="logo" />
              <div className="flex-col">
              <p className="mt-3 mx-4">VERAFI</p>
              {/* <p className="mt-3 mx-4">{address}</p> */}
              <p className=" text-end text-xs">Beta V0.3.0</p></div>
              </div>
              <div className="hidden lg:flex justify-between items-center grow-0 ">
              <ul className="flex flex-shrink-0 relative gap-x-4 font-medium text-lg text-black">
                {NavbarArray.map((item:NavbarItemtypes, index:number)=>(
              <li className="flex items-center  rounded-md px-3 py-1 hover:bg-gray-100 cursor-pointer group">
              <Link  href={item.href} >{item.label}</Link>
              { item.isDropDown? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15}/>:""}
              {item.isDropDown && <div className={` invisible group-hover:visible  absolute top-10 py-2 px-6 bg-gray-100 text-sm font-light min-w-[6rem]`}>
              <Dropdown item = {item}/>
              </div>}
              </li>))}
              </ul>
              </div>
              <div className="hidden lg:flex items-center">
                
               
                 {userinfo?<Button onClick={()=>{handleConnectwallet()}} className="bg-blue-500 text-white rounded-lg  px-8 py-2">
                     Wallet Connected
                  </Button>:<Button onClick={()=>{handleConnectwallet()}} className="bg-blue-500 text-white rounded-lg  px-8 py-2">
                    Connect Wallet
                  </Button>}
                 
              </div>
        
              {/* <div className="hidden lg:flex items-center">
                 <p className="bg-white text-black rounded-full border text-center w-8 h-8 px-2 py-2 mr-8 ">?</p>
                 <div className="  rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 hover:p-1">
                  <button className="bg-blue-500 text-white rounded-full  px-8 py-2">Connect Wallet</button>
                  </div>
              </div> */}


     {/* <div onClick={()=>setNavbarOpen(!isNavbarOpen)}>
         {isNavbarOpen?
          <div className="flex lg:hidden">
            <IoMdClose size={28}/>
          </div>
          :
          <div className="flex lg:hidden">
          <RxHamburgerMenu size={25}/>
          </div>}
          </div>

          <div className=" lg:hidden ">
      {isNavbarOpen  &&<MobileNavbar/>}
      </div> */}

              

              

          </div>

       
    // <div className="sticky top-0 backdrop-blur-lg bg-opacitiyDownColor z-50">
    // <div className="flex py-6 ml-20  justify-between items-center grow">
    //       <div className=" flex ">
              
    //           <Image width={30} height={30} src={"/Logo.svg"} alt="logo" />
    //           <div className="flex-col">
    //           <p className="mt-3 mx-4">Spectral</p>
    //           <p className=" text-end text-xs">Beta V0.3.0</p>
    //           </div>
    //       </div>
    //     <div className="hidden lg:flex justify-between items-center grow-0 ">
    //     <ul className="flex flex-shrink-0 relative gap-x-4 font-medium text-lg text-purple-950">
    //       {NavbarArray.map((item:NavbarItemtypes, index:number)=>(
    //         <li className="flex items-center  rounded-md px-3 py-1 hover:bg-gray-100 cursor-pointer group">
    //           <Link  href={item.href} >{item.label}</Link>
    //           { item.isDropDown? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15}/>:""}
    //           {item.isDropDown && <div className={` invisible group-hover:visible  absolute top-10 py-2 px-6 bg-gray-100 text-sm font-light min-w-[6rem]`}>
    //         <Dropdown item = {item}/>
    //           </div>}
    //         </li>))}
    //     </ul>
    //     {/* rounded-l-full
    //      */}
       
    //     {/* <div className=" flex-shrink-0 relative w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
    //       <div className="absolute right-2 flex items-center justify-center top-1 w-3 h-3 rounded-full bg-red-400 text-xs font-light">
    //         {cartItemNumber}
    //       </div>
    //       <BsCart2 size={25} />
    //     </div> */}
    //     </div>
        
        //  <div  >
        //   <button className="bg-white text-black rounded-full text-center w-8 h-8 px-2 py-2 ">?</button>
        //   <button className="bg-black text-white rounded-full px-8 py-2">Connect Wallet</button>
        // </div>
        //  <div onClick={()=>setNavbarOpen(!isNavbarOpen)}>
        //  {isNavbarOpen?
        //   <div className="flex lg:hidden">
        //     <IoMdClose size={28}/>
        //   </div>
        //   :
        //   <div className="flex lg:hidden">
        //   <RxHamburgerMenu size={25}/>
        //   </div>}
        //   </div>
      
    // </div>
    // <div className=" lg:hidden ">
    //   {isNavbarOpen  &&<MobileNavbar/>}
    //   </div>
  
    // </div>
  )
}
export default index;

const MobileNavbar = () => {
   const[isExpended, setExpended] =  useState<boolean>(false);
    
  return (
    
         
    <div className="w-full px-4 py-4 bg-gray-100">
        {
            NavbarArray.map((item:NavbarItemtypes , index:number)=>{
                return(
                    <Expand key={index} item={item}/>
                )
            })
        }
    </div>
          
   
    
  )
}


