export interface NavbarItemtypes{
    label:string,
    href:string,
    isDropDown: boolean,
    dropDownData?:Array<NavbarItemtypes>,
};

export const NavbarArray: Array<NavbarItemtypes> = [
   
    //     label:"Female",
    //     href:"/female",
    //     isDropDown:true,
    //     dropDownData:[
    //         {
    //             label:"Dresses",
    //             href:"/female/dress",
    //             isDropDown:false

    //         },
    //         {
    //             label:"T-Shirts",
    //             href:"/female/t-shirt",
    //             isDropDown:false
    //         },
    //         {
    //             label:"Pents",
    //             href:"/female/pent",
    //             isDropDown:false
    //         },
    //          {
    //             label:"Jackets",
    //             href:"/female/jacket",
    //             isDropDown:false

    //         },
    //          {
    //             label:"Sweaters",
    //             href:"/female/sweater",
    //             isDropDown:false

    //         },
    //     ]

    // },
    //  {
    //     label:"Male",
    //     href:"/male",
    //     isDropDown:true,
    //      dropDownData:[
    //         {
    //             label:"Sweaters",
    //             href:"/male/sweater",
    //             isDropDown:false
    //         },
           
    //          {
    //             label:"Jackets",
    //             href:"/male/jacket",
    //             isDropDown:false
    //         },
    //     ]

    // },
    //  {
    //     label:"Kids",
    //     href:"/kids",
    //     isDropDown:false

    // },
    //  {
    //     label:"All Products",
    //     href:"/allproducts",
    //     isDropDown:false

    // },
       {  
        label:"Dashboard",
        href:"/dashboard",
        isDropDown:false

    },
    
      {
        label:"Leaderboard",
        href:"/leaderboard",
        isDropDown:false

    },
         {
        label:"Account",
        href:"/account",
        isDropDown:true,
         dropDownData:[
            {
                label:"Create NFC",
                href:"/account/CreateNFC",
                isDropDown:false
            },
           
           
        ]

    },
]



