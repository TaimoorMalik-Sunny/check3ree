import React,{FC} from 'react'
 
 const RootWrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className=" w-11/12 mx-auto px-3 md:px-10 ">
        {children}
        
    
    </div>
  )
}
export default RootWrapper


// max-w-7xl
// mx-auto