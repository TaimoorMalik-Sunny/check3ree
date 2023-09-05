import React,{FC} from 'react'

 const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className=" w-11/12 mx-auto px-3 md:px-10 ">
        {children}
        

    </div>
  )
}
export default Wrapper


// max-w-7xl
// mx-auto